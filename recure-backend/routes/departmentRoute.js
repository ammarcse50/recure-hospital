const express = require("express");
const { getAllDept } = require("../controller/departmentController");

const router = express.Router();

router.get("/getAllDepartment",getAllDept)


module.exports = router