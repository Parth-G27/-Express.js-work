// A model is used to save Data in MongoDB

const mongoose = require("mongoose");

// Schema is a part of a model and it contains info about the tables & columns
const productSchema = mongoose.Schema(
  {
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
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    // timestamps helps us to keep a track of time when the code interacts with the DB
  }
);

const productModel = mongoose.model("products_collection", productSchema);
// This is the model we made, to make a Collection in the mongoDB

// we will export our Model (productModel) to other scripts
module.exports = productModel;
