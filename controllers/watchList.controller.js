const _ = require("lodash");
const { User } = require("../models/auth.model");
const { Video } = require("../models/video.model");
const catchError = require("../utils/catchError");

const getWatchLater = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    try {
      const user = await User.findOne({ _id: userID });
      const watchLater = await Video.find().where("_id").in(user.watchList);
      res.status(200).json({
        watchLater,
      });
    } catch (error) {}
  });
};

const addToWatchLater = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    const { videoID } = req.params;
    try {
      const user = await User.findOne({ _id: userID });
      user.watchList.push(videoID);
      user.save();

      const watchLater = await Video.find().where("_id").in(user.watchList);

      res.status(201).json({
        watchLater,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const deleteFromWatchLater = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    const { videoID } = req.params;
    try {
      const user = await User.findOne({ _id: userID });
      user.watchList.pull(videoID);
      user.save();

      const watchLater = await Video.find().where("_id").in(user.watchList);

      res.status(200).json({
        watchLater,
      });
    } catch (error) {}
  });
};

module.exports = { getWatchLater, addToWatchLater, deleteFromWatchLater };
