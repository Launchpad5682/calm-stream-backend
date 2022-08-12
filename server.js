const express = require("express");
const app = express();
const cors = require("cors");
const { connectToDB } = require("./db/db.connect");
const authV1 = require("./routes/user.router");
const videoV1 = require("./routes/video.router");
const categoryV1 = require("./routes/category.router");
const likesV1 = require("./routes/like.router");
const playlistsV1 = require("./routes/playlist.router");

// TODO
const watchLaterV1 = null;
const historyV1 = null;

app.use(express.json());
app.use(cors());

const port = 3002;

connectToDB();

// v1
const version = "/v1";

app.use(version, authV1);
app.use(version, videoV1);
app.use(version, categoryV1);
app.use(version, likesV1);
app.use(version, playlistsV1);

app.listen(process.env.PORT || port, () => {
  console.log(`Pomotodoro REST API listening on port ${port}`);
});
