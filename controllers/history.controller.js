const _ = require("lodash");
const { User } = require("../models/auth.model");
const { Video } = require("../models/video.model");
const catchError = require("../utils/catchError");

const getHistory = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    try {
      const user = await User.findOne({ _id: userID });
      const history = await Video.find().where("_id").in(user.history);
      res.status(200).json({
        history,
      });
    } catch (error) {}
  });
};

const addToHistory = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    const { videoID } = req.params;
    try {
      const user = await User.findOne({ _id: userID });
      user.history.push(videoID);
      user.save();

      const history = await Video.find().where("_id").in(user.history);

      res.status(200).json({
        history,
      });
    } catch (error) {
      console.log(error);
    }
  });
};

const deleteVideoFromHistory = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    const { videoID } = req.params;
    try {
      const user = await User.findOne({ _id: userID });
      user.history.pull(videoID);
      user.save();

      const history = await Video.find().where("_id").in(user.history);

      res.status(200).json({
        history,
      });
    } catch (error) {}
  });
};

const deleteHistory = (req, res, next) => {
  catchError(next, async () => {
    const { userID } = req;
    try {
      const user = await User.findOne({ _id: userID });
      user.history.pull(user.history);
      user.save();

      const history = await Video.find().where("_id").in(user.history);

      res.status(200).json({
        history,
      });
    } catch (error) {}
  });
};

module.exports = {
  getHistory,
  addToHistory,
  deleteVideoFromHistory,
  deleteHistory,
};
