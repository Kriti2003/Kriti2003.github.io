const express = require("express");
const Task=require("../models/taskModel");
const { createTask, getTasks, getTask, deleteTask, updateTask } = require("../Controller/taskController");
const router=express.Router()
router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask)

//ALTERNATE METHOD
//Create a Task
//router.post("/",createTask);
//Get/Read Data
//router.get("/",getTasks);
//Get a single Task
//router.get("/:id",getTask);
//Delete a Task
//router.delete("/:id",deleteTask);
//Update a Task
//router.put("/:id",updateTask);

module.exports = router;