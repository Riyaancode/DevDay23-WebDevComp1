const express = require("express");
const app = express();
const userController = require("../controller/user");

// Signup a new user
app.post("/create", userController.createUser);

// Get all Registered users
app.get("/get", userController.getAllUsers);

// Delete a user by id
app.delete("/delete/:userID", userController.deleteUser);


// e.g: http://localhost:5001/api/user/create   [POST: send "firstName","lastName","email","password","role" of user to this API]
// e.g: http://localhost:5001/api/user/get   [GET]
// e.g: http://localhost:5001/api/user/delete/:userID [DELETE:  userID in params ]

module.exports = app;
