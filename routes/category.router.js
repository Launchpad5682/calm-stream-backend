const express = require("express");
const { readAllCategories } = require("../controllers/category.controller");
const router = express.Router();

router.get("/categories", readAllCategories);

module.exports = router