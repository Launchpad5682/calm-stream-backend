const mongoose = require("mongoose");
const { Schema } = mongoose;

const ObjectId = Schema.ObjectId;

const playlistSchema = new Schema({
  title: { type: String, unique: [true], required: true },
  description: { type: String, required: true },
  videos: {
    type: [ObjectId],
    default: [],
  },
});

const Playlist = new mongoose.model("Playlist", playlistSchema);

module.exports = { Playlist };
