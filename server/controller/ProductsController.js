const {productsList} = require("../constants/const");
const ProductsController = {
    GetAllProducts:function(req, res, next) {
        res.send(productsList);
    }
}
module.exports = ProductsController;