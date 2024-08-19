const departments = require("../models/departmentModel");

exports.getAllDept = async (req, res) => {
  const allDepartment = await departments.find({});
  res.send(allDepartment);
};
