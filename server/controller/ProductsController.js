const {productsList} = require("../constants/const");
const Product = require("../model/Product");
const {response} = require("express");

const ProductsController = {
    GetAllProducts:async function(req, res, next) {
       try {
           const ProductList = await Product.find();
           res.status(200).json(productsList)
           // res.send(productsList);
       }catch (err){
           console.error(err);
           res.stale(500).json({
               error: "Something went Wrong"
           })
       }
    },

    SaveProduct :async function (req, res, next){
        try {
            const ProductData = req.body;

            const product = await Product.create(ProductData)
            res.status(200).json(product)
        }catch (err){
            console.error(err);
            res.stale(500).json({
                error: "Something went Wrong"
            })
        }
    },

    GetProduct :async function (req, res, next){
        try {
            const ProductID = req.params.id;
            const  product = await Product.find({id:ProductID});
            res.status(200).json(product);
        }catch (err){
            console.error(err);
            res.stale(500).json({
                error: "Something went Wrong"
            })
        }
    },

    UpdateProduct: async function(req, res, next){
        try {
            const productId = req.params.id;
            const productData = req.body;

            const updatedProduct = await Product.findOneAndUpdate(
                {
                    id:productId
                },productData,
                {new: true});

            if(!updatedProduct){
                return res.status(404).json({error: 'Product not found'})
            }

            res.status(200).json(updatedProduct)
        }catch (error){
            console.error("Update product error " + error)
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    DeleteProduct: async function(req, res, next){
        try {
            const productId = req.params.id;
            const result = await Product.deleteOne({id:productId});

            if(result.deletedCount == 0){
                return res.status(404)
            }

            res.status(200).json({message: 'Product deleted'})
        }catch (error){
            console.error("Update delete error " + error)
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}
module.exports = ProductsController;