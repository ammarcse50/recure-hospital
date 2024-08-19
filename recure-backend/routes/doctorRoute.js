const express = require("express");
const { getAllDoctors } = require("../controller/doctorController");

const router = express.Router();

router.get("/getAllDoctors", getAllDoctors);

module.exports = router
