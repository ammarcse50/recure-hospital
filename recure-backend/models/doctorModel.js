const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: String,
    qualifications: String,
    position: String,
    institution: String,
    room_no: Number,
    serial: String,
    time: String,
    image: String,
    category: String,
  },
  { timestamps: true }
);

const doctors = new mongoose.model("doctor", doctorSchema);
module.exports = doctors;
