const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  columns: [
    {
      name: { type: String, required: true },
      workItems: [{ type: mongoose.Schema.Types.ObjectId, ref: "WorkItem" }],
    },
  ],
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
