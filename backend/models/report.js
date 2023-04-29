const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  hoursSpent: { type: Number },
  tasksGenerated: { type: Number },
  tasksCompleted: { type: Number },
  peopleAssigned: { type: Number },
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
