const mongoose = require("mongoose");

const workItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  board: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
});

const WorkItem = mongoose.model("WorkItem", workItemSchema);
module.exports = WorkItem;
