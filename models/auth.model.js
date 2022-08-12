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

const userSchem = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: "First name is required",
      text: true,
    },
    lastName: {
      type: String,
      trim: true,
      required: "Last name is required",
      text: true,
    },
    email: {
      type: String,
      unique: [true, "email already exists in database!"],
      lowercase: true,
      trim: true,
      required: [true, "email not provided"],
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: "{VALUE} is not a valid email!",
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    likes: {
      type: [ObjectId],
      default: [],
    },
    watchList: {
      type: [ObjectId],
      default: [],
    },
    playlists: {
      type: [ObjectId],
      default: [],
    },
    history: {
      type: [ObjectId],
      default: [],
    },
    playlists: {
      type: [playlistSchema],
      default: [],
    },
  },
  { timestamps: true }
);

const User = new mongoose.model("User", userSchem);

module.exports = { User };
