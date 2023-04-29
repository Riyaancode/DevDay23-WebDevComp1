const express = require("express");
const app = express();
const task = require("../controller/task");

// Add task 
app.post("/add", task.addTask);

// Get All task
// app.get("/get/:userID", task.getAllTasks)

module.exports = app;
