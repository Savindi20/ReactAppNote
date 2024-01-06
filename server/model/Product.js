const mongoose = require('mongoose');
const {Model} = require("mongoose");


const ProductModel = mongoose.Schema(
    {
        "id": {
            require:true,
            type:Number,
            unique:true,
            index:true //for better performance
        },
        "name": {
            require:true,
            type:String
        },
        "price": {
            require:true,
            type:Number
        },
        "currency":{
            require:true,
            type:Number
        },
        "image": {
            require:true,
            type:String
        },
    },
);

const Product = mongoose.model('Product', ProductModel)
module.exports = Product;