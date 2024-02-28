
const mongoose = require("mongoose");

const invSchema0 = mongoose.Schema(
  {
    id:{
      type: Number,
      required: true 
    },
    name: {
      type: String,
      required: [true, "Enter product name"],
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true
    },
    last_stock_refill : {
      type : Date,
      required : true
    },

   
  },
  {
    timestamps: true,
  }
);

const invModel1 = mongoose.model("inventory_collections", invSchema0);

module.exports = invModel1;
