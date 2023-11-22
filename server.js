const express = require("express"); // express variable requires the package from express

// Using Node.js `require()`
const mongoose = require("mongoose");

const app = express(); // Creates an express application
const port = 3000;

// Declaring routes, we can declare multiple routes on the application
// app.METHOD(PATH, HANDLER)

app.get("/", (req, res) => {
  res.send("Hello Node API");
});
// In callback function we have two parameters, request (req) & response (res)

app.get("/route0", (req, res) => {
  res.send("Route 0 is running ");
});

mongoose
  .connect("mongodb+srv://parth3_mongo:parthdb48@cluster1.sqvug29.mongodb.net/")
  .then(() => {
    console.log("DataBase Connected.");

    app.listen(port, () => {
      console.log("App listening to port " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
