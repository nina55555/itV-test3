
//NEEDS
const Product = require('../models/product.model')


//CONTROLLERS FONCTIONS

//GET ONE PRODUCT
const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const productId = await Product.findById(id);
      res.status(200).json(productId);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  //GET ALL PRODUCTS
const getProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  //POST A PRODUCT
  const postProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  //UPDATE A PRODUCT
  const updateProduct = async (req, res) => {
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
  };


  //DELETE A PRODUCT
  const deleteProduct = async (req, res) => {
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
  };




  //FONCTIONS EXPORTED
  module.exports = {getProduct,getProducts, postProduct, updateProduct, deleteProduct};