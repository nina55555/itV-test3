const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const path = require("path");
const app = express();

require("dotenv").config( {path: "./.env"})


const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get("/", (req, res) => {
  res.send("Hello Humanitos!");
});

//get all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get with an id
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const productId = await Product.findById(id);
    res.status(200).json(productId);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//post a product
app.post("/api/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a product
app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      res.status(404).json({ message: "produit introuvable, cherchez mieux" });
    }
    //optionnel ?!
    const productUpdated = await Product.findById(id);
    //fin optionnel

    res.status(200).json(productUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a post
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      res
        .status(404)
        .json({ message: "produit introuvable, ne peut etre effacé" });
    }

    res.status(200).json(deletedProduct);
    

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    process.env.MONGODB_URL
  )
  .then(() => {
    console.log("connected to database");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("connection to database failed");
  });
