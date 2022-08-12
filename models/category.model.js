const { default: mongoose, Schema } = require("mongoose");

const categorySchema = new Schema({
  categoryName: String,
  displayName: String,
  description: String,
  path: String,
});

const Category = new mongoose.model("Category", categorySchema);

module.exports = { Category };
