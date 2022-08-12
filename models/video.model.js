const { Schema, default: mongoose } = require("mongoose");

const videoSchema = new Schema({
  title: String,
  creator: String,
  description: String,
  categoryName: String,
  thumbnail: String,
});

const Video = new mongoose.model("Video", videoSchema);

module.exports = { Video };
