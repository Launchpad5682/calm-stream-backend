const express = require("express");
const router = express.Router();
const {
  getWatchLater,
  addToWatchLater,
  deleteFromWatchLater,
} = require("../controllers/watchList.controller");
const { authenticateUser } = require("../middlewares/authenticateUser");

router.get("/watchLater", authenticateUser, getWatchLater);

router.post("/watchLater/:videoID", authenticateUser, addToWatchLater);

router.delete("/watchLater/:videoID", authenticateUser, deleteFromWatchLater);

module.exports = router;
