const express = require("express");
const { handleUserSignUp } = require("../controllers/userController");
const router = express.Router();

router.post("/", handleUserSignUp);

module.exports = router;
