const express = require("express");
const {
  getHistory,
  deleteHistory,
  deleteVideoFromHistory,
  addToHistory,
} = require("../controllers/history.controller");
const router = express.Router();
const { authenticateUser } = require("../middlewares/authenticateUser");

router.get("/history", authenticateUser, getHistory);

router.post("/history/:videoID", authenticateUser, addToHistory);

router.delete("/history/:videoID", authenticateUser, deleteVideoFromHistory);

router.delete("/history", authenticateUser, deleteHistory);

module.exports = router;
