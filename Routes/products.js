const router = require("express").Router();
const Product = require("../Models/product");
const { body, validationResult } = require("express-validator");


router
  .get("/all", async (req, res) => {
    console.log("GET /products/all");

    try {
      const allProducts = await Product.find();
      res.status(200).json(allProducts);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  }).post("/newProduct", body("product").isLength({ min: 8, max: 300 }), async (req, res) => {
    console.log("POST /products/newProduct");
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array(), message:"validation error" });
    }

    const { body } = req;

    try {
      const newProduct = new Product(body);
      await newProduct.save();
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  }).delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    console.log("DELETE /products/delete");
    try {
      const delProduct = await Product.findOneAndDelete({ _id: id });
      res.status(200).json(delProduct);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  }).put("/update/:id", async (req, res) => {
    console.log("PUT /products/update");
    const { body } = req;
    const { id } = req.params;

    try {
      const modProduct = await Product.findByIdAndUpdate(id, body, {
        useFindAndModify: false,
      });
      res.status(200).json(modProduct);
    } catch (error) {
      res.status(400).json({ error: true, message: error });
    }
  }).get("/:id", async(req,res)=>{
    const {id} = req.params;
    console.log('GET /products/'+id);
    try {
        const product = await Product.findOne({_id:id,});
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({error:true,message:error,});
    }
  })
  





  module.exports = router;
