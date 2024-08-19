const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  department: {
    type: String,
  },
  image: {
    type: String,
  },
});
const departments = new mongoose.model("department",departmentSchema)
module.exports = departments;
