const express = require("express");
const { readAllVideos, getVideoByID } = require("../controllers/video.controller");
const router = express.Router();

/** Get all the videos */
router.get("/videos", readAllVideos);

// Get video using single video ID
router.get("/video/:videoID", getVideoByID)

module.exports = router;
