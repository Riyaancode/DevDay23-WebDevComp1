const express = require("express");
const app = express();
const projectController = require("../controller/project");

// Create a new project
app.post("/add", projectController.createProject);

// Get all projects
app.get("/get", projectController.getAllProjects);

// Get project by ID
app.get("/:projectID", projectController.getProjectByID);

// Add a member to a project
app.post("/:projectID/member", projectController.addMemberToProject);

// Add a task to a project
app.post("/:projectID/task", projectController.addTaskToProject);

// e.g: http://localhost:5001/api/project/add

module.exports = app;
