const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const URI = process.env.MONGODB_URI;

function connectToDB() {
  mongoose
    .connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Successfuly connected using Mongoose"))
    .catch(() => console.error("Mongoose connection failed"));
}

module.exports = { connectToDB };
