const express = require("express");
const {
  getLikedVideos,
  addToLikes,
  deleteFromLikes,
} = require("../controllers/like.controller");
const router = express.Router();
const { authenticateUser } = require("../middlewares/authenticateUser");

router.get("/likes", authenticateUser, getLikedVideos);

router.post("/likes/:videoID", authenticateUser, addToLikes);

router.delete("/likes/:videoID", authenticateUser, deleteFromLikes);

module.exports = router;
