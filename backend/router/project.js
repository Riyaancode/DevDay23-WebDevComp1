const express = require("express");
const app = express();
const projectController = require("../controller/project");

// Create a new project
app.post("/add", projectController.createProject);

// Get all projects
app.get("/get", projectController.getAllProjects);

// Get project by ID
app.get("/get/:projectID", projectController.getProjectByID);

// Add a member to a project
app.post("/:projectID/member", projectController.addMemberToProject);

// Add a task to a project
app.post("/:projectID/addtask", projectController.addTaskToProject);


// e.g: http://localhost:5001/api/project/add   [POST:please send project "name", "admin", "organization" of project to this API]
// e.g: http://localhost:5001/api/project/get   [GET]
// e.g: http://localhost:5001/api/project/get/:projectID  [GET: send projectID in params]
// e.g: http://localhost:5001/api/project/:projectID/member  [POST: please write projectID in params and send member "email", "role"  to this API]
// e.g: http://localhost:5001/api/project/:projectID/addtask [POST: please write projectID in params and send task "name", "nature", "startDate", "endDate", "assignedTo(userID)"  to this API]

module.exports = app;
