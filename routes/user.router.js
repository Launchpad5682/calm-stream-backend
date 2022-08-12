const express = require("express");
const { signUpHandler, loginHandler } = require("../controllers/auth.controller");
const router = express.Router();

router.post("/signup", signUpHandler);

router.post("/login", loginHandler);

module.exports = router;