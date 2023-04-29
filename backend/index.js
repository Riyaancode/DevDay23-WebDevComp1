const express = require("express");
const cors = require("cors");
const { main } = require("./db/conn");
const organizationRoute = require("./router/organization");
const projectRoute = require("./router/project");
const taskRoute = require("./router/task");
const boardRoute = require("./router/board");

const app = express();
const PORT = 5001;
main();
app.use(express.json());
app.use(cors());

// app.use("/api/user", userRoute);
// app.use("/api/organization", organizationRoute);
// app.use("/api/project", projectRoute);
app.use("/api/task", taskRoute);
// app.use("/api/board", boardRoute);
// app.use("/api/workItem", userRoute);
// app.use("/api/report", reportRoute);

// Here we are listening to the server
app.listen(PORT, () => {
  console.log("I am live again");
});
