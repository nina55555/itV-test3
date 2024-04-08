
//NEEDS
const express = require("express");
const product = require("../models/product.model");
const router = express.Router();
const {getProduct, getProducts,  postProduct, updateProduct, deleteProduct} = require('../controllers/products.controllers');



//ROUTES
  
  
  
  //get with an id
  router.get("/:id", getProduct);

  //get all products
  router.get("/", getProducts);

  //post a product
  router.post("/", postProduct);
  
  //update a product
  router.put("/:id", updateProduct);
  
  //delete a post
  router.delete("/:id", deleteProduct);
  
  

  //ROUTER EXPORTED
  module.exports = router;