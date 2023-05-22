const router = require("express").Router();
const Product = require("../Models/product");
const { body, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");


router
  .get("/all", async (req, res) => {
    console.log("GET /products/all");

    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  })





  module.exports = router;
