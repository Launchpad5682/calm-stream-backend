const _ = require("lodash");
const { Video } = require("../models/video.model");

const readAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({
      videos,
    });
  } catch (error) {}
};

const getVideoByID = async (req, res) => {
  const { videoID } = req.params;
  try {
    const video = await Video.find({ _id: videoID });

    res.status(200).json({
      video: video[0],
    });
  } catch (error) {}
};

module.exports = { readAllVideos, getVideoByID };
