const express = require("express");
const {
  createPlaylist,
  getAllPlaylists,
  getVideosFromPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
  deletePlaylist,
} = require("../controllers/playlist.controller");
const { authenticateUser } = require("../middlewares/authenticateUser");
const router = express.Router();

router.post("/playlists", authenticateUser, createPlaylist);
// get all playlists of the user
router.get("/playlists", authenticateUser, getAllPlaylists);

// get all videos of playlist
router.get("/playlist/:playlistID", authenticateUser, getVideosFromPlaylist);

// add video to playlist
router.post(
  "/playlist/:playlistID/:videoID",
  authenticateUser,
  addVideoToPlaylist
);

// delete video from a playlist
router.delete(
  "/playlist/:playlistID/:videoID",
  authenticateUser,
  deleteVideoFromPlaylist
);

// delete playlist
router.delete("/playlists/:playlistID", authenticateUser, deletePlaylist);

module.exports = router;
