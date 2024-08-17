const express = require("express");
const { saveUser } = require("../controller/usersController");

const router = express.Router();

router.post("/users", saveUser);

module.exports = users;
