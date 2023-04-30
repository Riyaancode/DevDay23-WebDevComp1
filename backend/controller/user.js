const User = require("../models/user");

// Signup a new user
const createUser = async (req, res) => {
  const newUser = await new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  });
  newUser
    .save()
    .then((result) => {
      res.status(201).send(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};


// ------------- Signin --------------
let userAuthCheck;
const signinUser = async (req, res) => {


  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    console.log("USER: ", user);
    if (user) {
      res.send(user);
      userAuthCheck = user;
    } else {
      res.status(401).send("Invalid Credentials");
      userAuthCheck = null;
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

// Getting User Details of login user
const checkSigninUser = (req, res) => {
  console.log("userAuth; ", userAuthCheck)
  res.send(userAuthCheck);
};
// ------------------------------------

// Get all Registered users
const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};



// Delete a user by id
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { createUser, signinUser, checkSigninUser, getAllUsers, deleteUser };
