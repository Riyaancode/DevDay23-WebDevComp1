const express = require("express");
const app = express();
const organizationController = require("../controller/organization");


// Add a new organization
app.post('/add', organizationController.addOrganization);

// Get all organizations
app.get('/get', organizationController.getOrganization);

// Get specific user organizations
app.get('/get/:userId', organizationController.getSpecificUserOrganization);

// Add a member to an organization
app.post('/member/add', organizationController.addMemberToOrganization);

// Remove a member from an organization
app.delete('/member/delete', organizationController.removeMemberFromOrganization);

// e.g: http://localhost:5001/api/organization/add   [POST:please send "name" of organization to this API]
// e.g: http://localhost:5001/api/organization/get   [GET]
// e.g: http://localhost:5001/api/organization/get/:userId   [GET: write userId in params]
// e.g: http://localhost:5001/api/organization/member/add  [POST: please send "userID", "organizationID" to this API]
// e.g: http://localhost:5001/api/organization/member/delete [DELETE:  please send "userID", "organizationID" to this API ]

module.exports = app;
