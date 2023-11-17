const express = require('express'); // express variable requires the package from express
const app = express(); // Creates an express application
const port = 3000; 

// Declaring routes, we can declare multiple routes on the application
// app.METHOD(PATH, HANDLER)

app.get('/',(req,res)=>{
    res.send('Hello Node API');
})
// In callback function we have two parameters, request (req) & response (res)

app.listen(port,()=>{
    console.log("App listening to port "+port);
    
})