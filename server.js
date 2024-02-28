const dotenv = require("dotenv").config();

const express = require("express"); // express variable requires the package from express

// Using Node.js `require()`
const mongoose = require("mongoose");

const Product = require("./models/productModel");
const Inventory = require("./models/inventoryModel");

const app = express(); // Creates an express application
const port = 3000;

// Middleware :
// using the express.json middleware, the app can access json as well
app.use(express.json());

// Declaring routes, we can declare multiple routes on the application
// app.METHOD(PATH, HANDLER)

app.get("/", (req, res) => {
  res.send("Hello Node API");
});
// In callback function we have two parameters, request (req) & response (res)

app.get("/route0", (req, res) => {
  res.send("Route 0 is running ");
});

// Here we create a route for saving data into teh database
app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/inventory", async (req, res) => {
  try {
    const inv = await Inventory.create(req.body);
    res.status(200).json(inv);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});



mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DataBase Connected.");
    
    app.listen(port, () => {
      console.log("App listening to port " + port);
    });

    console.log("Refresh : "+refresh);

    
  })
  .catch((error) => {
    console.log(error);
  });


