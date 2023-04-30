const express = require("express");
const app = express();
const projectController = require("../controller/project");

// Create a new project
app.post("/add", projectController.createProject);

// Get all projects
app.get("/get", projectController.getAllProjects);

// Get project by ID
app.get("/get/:projectID", projectController.getProjectByID);

// Get project by Organization ID
app.get("/get/organization/:organizationID", projectController.getAllProjectByOrganizationID);

// Add a member to a project
app.post("/:projectID/member", projectController.addMemberToProject);

// Add a task to a project
app.post("/:projectID/addtask", projectController.addTaskToProject);


// e.g: http://localhost:5001/api/project/add   [POST:please send project "name", "admin (ID of admin )", "organization (organization id )" of project to this API]
// e.g: http://localhost:5001/api/project/get   [GET]
// e.g: http://localhost:5001/api/project/get/:projectID  [GET: send projectID in params]
// e.g: http://localhost:5001/api/project/get/organization/:organizationtID  [GET: send organizationID in params]
// e.g: http://localhost:5001/api/project/:projectID/member  [POST: please write projectID in params and send member "email", "role"  to this API]
// e.g: http://localhost:5001/api/project/:projectID/addtask [POST: please write projectID in params and send task "name", "nature", "startDate", "endDate", "assignedTo(userID)"  to this API]

module.exports = app;
