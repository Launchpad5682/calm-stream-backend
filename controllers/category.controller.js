const _ = require("lodash");
const { Category } = require("../models/category.model");

const readAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json({
      categories,
    });
  } catch (error) {}
};

module.exports = { readAllCategories };
