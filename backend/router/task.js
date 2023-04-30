const express = require("express");
const app = express();
const taskController = require("../controller/task");

// Create a new task
app.post("/add", taskController.createTask);

// Get all tasks for a project
app.get("/get/:projectId", taskController.getAllTasksForProject);

// Get task by id
app.get("/get/:projectId/:taskId", taskController.getTaskById);

// Update task status
app.put("/update/:taskId/status", taskController.updateTaskStatus);


// e.g: http://localhost:5001/task/add

module.exports = app;
