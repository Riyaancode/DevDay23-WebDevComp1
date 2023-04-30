const Task = require("../models/task");
const Project = require("../models/project");



// Get all tasks for a project
const getAllTasksForProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const tasks = await Task.find({ project: projectId });
    res.status(201).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Get task by id
const getTaskById = async (req, res) => {
  try {
    const { projectId, taskId } = req.params;

    // Check if project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    const task = await Task.findById(taskId);
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update task status
const updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(201).json({ message: "Task status updated successfully", task });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};




module.exports = {
  getAllTasksForProject,
  getTaskById,
  updateTaskStatus,
};
