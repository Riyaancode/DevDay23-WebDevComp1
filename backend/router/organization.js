const express = require("express");
const app = express();
const organizationController = require("../controller/organization");


// Add a new organization
app.post('/add', organizationController.addOrganization);

// Get all organizations
app.get('/get', organizationController.getOrganization);

// Add a member to an organization
app.post('/member/add', organizationController.addMemberToOrganization);

// Remove a member from an organization
app.delete('/member/delete', organizationController.removeMemberFromOrganization);

// e.g: http://localhost:5001/api/organization/add

module.exports = app;
