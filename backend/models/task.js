const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nature: { type: String, enum: ["task", "bug"], required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Open", "Done", "Closed"],
    default: "To Do",
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
