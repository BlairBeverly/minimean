var mongoose = require('mongoose');
var Product = mongoose.model('Product');

function ProductController(){
	this.getProducts = function(req, res){
		Product.find({}, function(err, products) {
			if (err) {
				console.log('there was an error')
			} else{
				return res.json(products)
			}
		})
	}
	this.createProduct = function(req, res){
		var product = new Product({
			product_name: req.body.product_name,
			image: req.body.image,
			description: req.body.description,
			quantity: req.body.quantity});
		product.save(function(err, newProduct) {
			if (err) {
				console.log("error creating product")
			} else {
				console.log('successfully created product')
				console.log(newProduct)
				return res.json(newProduct)
			}
		})
	}
}

module.exports = new ProductController();