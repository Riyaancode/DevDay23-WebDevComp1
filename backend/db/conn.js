const mongoose = require("mongoose");
const uri =
  "mongodb+srv://webdevcompetition23:DevDay23Web@cluster0.zixzuva.mongodb.net/DynamicProjectManagement?retryWrites=true&w=majority";

function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Succesfull");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
