const _ = require("lodash");
const { User } = require("../models/auth.model");
const { Video } = require("../models/video.model");

const createPlaylist = async (req, res) => {
  const { userID } = req;
  try {
    const { title, description } = req.body.playlist;
    const user = await User.findOne({ _id: userID });
    user.playlists.push({ title, description });
    user.save();
    const { playlists } = _.pick(user, ["playlists"]);
    res.status(200).json({
      playlists,
    });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

const getAllPlaylists = async (req, res) => {
  const { userID } = req;
  try {
    const user = await User.findOne({ _id: userID });
    const { playlists } = _.pick(user, ["playlists"]);

    res.status(200).json({
      playlists,
    });
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};

const getVideosFromPlaylist = async (req, res) => {
  const { userID } = req;
  const { playlistID } = req.params;
  try {
    const user = await User.findOne({
      _id: userID,
    });

    const playlistIndex = user.playlists.findIndex(
      (play) => play._id.toString() === playlistID
    );

    const videosIndex = user.playlists[playlistIndex].videos;

    const videos = await Video.find().where("_id").in(videosIndex);

    res.status(200).json({
      videos,
    });
  } catch (error) {
    console.log(error);
  }
};

const addVideoToPlaylist = async (req, res) => {
  const { userID } = req;
  const { playlistID, videoID } = req.params;
  try {
    const user = await User.findOne({
      _id: userID,
    });

    const playlistIndex = user.playlists.findIndex(
      (play) => play._id.toString() === playlistID
    );

    user.playlists[playlistIndex].videos.push(videoID);
    user.save();
    const playlists = user.playlists;
    res.status(200).json({
      playlists,
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteVideoFromPlaylist = async (req, res) => {
  const { userID } = req;
  const { playlistID, videoID } = req.params;
  try {
    const user = await User.findOne({
      _id: userID,
    });

    const playlistIndex = user.playlists.findIndex(
      (play) => play._id.toString() === playlistID
    );

    user.playlists[playlistIndex].videos.pull(videoID);
    user.save();
    const playlists = user.playlists;
    res.status(200).json({
      playlists,
    });
  } catch (error) {
    console.log(error);
  }
};

const deletePlaylist = async (req, res) => {
  const { userID } = req;
  const { playlistID } = req.params;
  try {
    const user = await User.findOne({
      _id: userID,
    });

    user.playlists.pull({ _id: playlistID });
    user.save();
    const playlists = user.playlists;
    res.status(200).json({
      playlists,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createPlaylist,
  getAllPlaylists,
  getVideosFromPlaylist,
  addVideoToPlaylist,
  deleteVideoFromPlaylist,
  deletePlaylist,
};
