const _ = require("lodash");
const { User } = require("../models/auth.model");
const { Video } = require("../models/video.model");

const getLikedVideos = async (req, res) => {
  const { userID } = req;

  try {
    const user = await User.findOne({ _id: userID });
    const likesID = _.pick(user, ["email", "likes"]);

    const likes = await Video.find().where("_id").in(likesID.likes);

    res.status(200).json({
      likes,
    });
  } catch (error) {}
};

const addToLikes = async (req, res) => {
  const { videoID } = req.params;
  const { userID } = req;

  try {
    const user = await User.findById(userID);
    user.likes.push(videoID);
    user.save();
    const likesID = _.pick(user, ["likes"]);

    const likes = await Video.find().where("_id").in(likesID.likes);

    res.status(201).json({
      likes,
    });
  } catch (error) {}
};

const deleteFromLikes = async (req, res) => {
  const { videoID } = req.params;
  const { userID } = req;

  try {
    const user = await User.findById(userID);
    user.likes.pull(videoID);
    user.save();
    const likesID = _.pick(user, ["likes"]);

    const likes = await Video.find().where("_id").in(likesID.likes);

    res.status(200).json({
      likes,
    });
  } catch (error) {}
};

module.exports = { getLikedVideos, addToLikes, deleteFromLikes };
