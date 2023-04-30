const Project = require("../models/project");
const User = require("../models/user");
const Task = require("../models/task");

// Function for generating unique project key
const generateProjectKey = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < 5; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
};

// Create a new project
const createProject = async (req, res) => {
  const key = generateProjectKey();
  const project = new Project({
    name: req.body.name,
    key: key,
    admin: req.body.admin,
    organization: req.body.organization,
  });
  project
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

// Get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("admin")
      .populate("organization");
    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get a project by ID
const getProjectByID = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await Project.findById(projectId)
      .populate("admin")
      .populate("members.user")
      .populate("members.role")
      .populate("tasks");
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Add a member to a project
const addMemberToProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const { email, role } = req.body;
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    project.members.push({ user: user._id, role });
    await project.save();
    res.json({ message: "Member added to project" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Add a task to a project
const addTaskToProject = async (req, res) => {
  const { projectId } = req.params;
  const project = await Project.findById(projectId);
  if (!project) {
    return res.status(404).json({ message: "Project not found" });
  }
  const task = new Task({
    name: req.body.name,
    nature: req.body.nature,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    assignedTo: req.body.assignedTo
  });
  task
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

module.exports = {
  createProject,
  getAllProjects,
  getProjectByID,
  addMemberToProject,
  addTaskToProject,
};
