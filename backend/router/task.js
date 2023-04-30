const express = require("express");
const app = express();
const taskController = require("../controller/task");
const projectController = require("../controller/project");

// Create a new task
app.post("/:projectId/add", projectController.addTaskToProject);

// Get all tasks for a project
app.get("/get/:projectId", taskController.getAllTasksForProject);

// Get task by id
app.get("/get/:projectId/:taskId", taskController.getTaskById);

// Update task status
app.put("/update/:taskId/status", taskController.updateTaskStatus);



// e.g: http://localhost:5001/api/task/:projectID/add [POST: please write projectID in params and send task "name", "nature", "startDate", "endDate", "assignedTo(userID)"  to this API]
// e.g: http://localhost:5001/api/task/get/:projectId   [GET: write projectId in params]
// e.g: http://localhost:5001/api/task/get/:projectId/:taskId   [GET: write projectId, taskId in params]
// e.g: http://localhost:5001/api/task/update/:taskId/status [PUT: write taskId in params and send "status" to this API]

module.exports = app;
