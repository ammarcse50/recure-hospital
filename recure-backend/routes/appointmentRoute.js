const express = require("express");
const { saveAppointment } = require("../controller/appointmentController");
const router = express.Router();

router.get("/appointments", getAppointment);
router.post("/appointments", saveAppointment);

module.exports = router;
