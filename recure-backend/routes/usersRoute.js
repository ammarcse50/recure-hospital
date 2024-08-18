const express = require("express");
const { saveUsers,  getAllUsers } = require("../controller/usersController");

const router = express.Router();

router.get("/getAllUsers",getAllUsers);
router.post("/saveUsers", saveUsers);


module.exports = router;
