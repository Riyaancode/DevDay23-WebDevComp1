const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Organization = mongoose.model("Organization", organizationSchema);
module.exports = Organization;
