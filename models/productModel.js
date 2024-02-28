// A model is used to save Data in MongoDB

const mongoose = require("mongoose");

// Schema is a part of a model and it contains info about the tables & columns
const productSchema0 = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Enter product name"],
    },
    qunatity: {
      type: Number,
      required: [true, "Enter product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    // timestamps helps us to keep a track of time when the code interacts with the DB
  }
);

const productModel1 = mongoose.model("products_collections", productSchema0);
// This is the model we made, to make a Collection in the mongoDB

// we will export our Model (productModel) to other scripts
module.exports = productModel1;
