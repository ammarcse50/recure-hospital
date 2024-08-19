const mongoose = require("mongoose");

const departmentSchema = new mongoose.Schema({
  department: {
    type: String,
  },
  image: {
    type: String,
  },
},{timestamps:true});
const departments = new mongoose.model("department",departmentSchema)
module.exports = departments;
