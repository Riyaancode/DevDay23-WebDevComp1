const express = require("express");
const app = express();
const userController = require("../controller/user");

// Signup a new user
router.post("/create", userController.createUser);

// Get all Registered users
router.get("/get", userController.getAllUsers);

// Delete a user by id
router.delete("/user/:id", userController.deleteUser);

// e.g: http://localhost:5001/api/user/create

module.exports = app;
