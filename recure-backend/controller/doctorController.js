const doctors = require("../models/doctorModel.js");

exports.getAllDoctors = async (req, res) => {
  const allDoctors = await doctors.find({});
  res.send(allDoctors);
};
