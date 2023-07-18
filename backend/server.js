const dotenv = require("dotenv").config()
const mongoose = require('mongoose')
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./models/taskModel");
const app = express();
const taskRoutes=require("./Routes/taskroutes");
const cors=require("cors")
//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin:["http://localhost:3000" , "https://mern-task-app.onrender.com"]
}));
app.use("/api/tasks",taskRoutes);

//const logger= (req,res,next)=>{
//console.log("Middleware ran");
//console.log(req.method);
//next()
//};


//Routes
app.get("/", (req, res) => {
    res.send("Home Page");
});


const PORT = process.env.PORT || 1750;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    })
    .catch((err) => console.log(err));
    

//database model refers to the logical structure or layout of a database and how the data will be stored.
//A database schema defines how the data is organised.
