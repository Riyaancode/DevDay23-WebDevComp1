const Task = require("../models/task");

// Add Task
const addTask = (req, res) => {
  console.log("ADD TASK WORKING ");
//   res.send("Add Task Working");

  const taskAdd = new Task({
    name: req.body.name,
    nature: req.body.nature,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    assignedTo: req.body.assignedTo,
    status: req.body.status,
    project: req.body.project,
  });
  taskAdd
    .save()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      res.status(402).send(err);
    });
};

module.exports = { addTask };
