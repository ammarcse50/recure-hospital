const express = require('express');
const router = express.Router();
const {saveAppointment, getAllAppointment} =require('../controller/appointmentController')
router.post("/saveAppointment",saveAppointment);
router.get("/getAllAppointment",getAllAppointment);


module.exports = router