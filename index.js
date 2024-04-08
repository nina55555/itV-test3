
//NEEDS
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productsRoutes = require('./routes/products.routes.js')
const path = require("path");
const app = express();


//DOTENV PASS CONFIGURATION
require("dotenv").config( {path: "./.env"})


//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//ROUTE INITIALE GENERALE
app.use("/api/products", productsRoutes)




//PORT
const port = 3000;

//CONNECTING TO PORT
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});




//MONGODB CONNECTION 
mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
    console.log("connected to database");

    
  })
  .catch(() => {
    console.log("connection to database failed");
  });
