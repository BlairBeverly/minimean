var customerController = require('../controllers/customers.js')
var productController = require('../controllers/products.js')
var orderController = require('../controllers/orders.js')

module.exports = function(app){
    app.get('/customers', function(req, res) {
        customerController.getCustomers(req, res)
    })
	app.post('/customers', function(req, res){
		// console.log(req.body);
		customerController.createCustomer(req, res);
	})
    app.delete('/customers/:id', function(req, res) {
        customerController.deleteCustomer(req, res);
    })
    app.get('/products', function(req, res) {
        productController.getProducts(req, res)
    })
    app.post('/products', function(req, res) {
        productController.createProduct(req, res)
    })
    app.get('/orders', function(req, res){
        orderController.getOrders(req, res)
    })
    app.post('/orders', function(req, res) {
        orderController.createOrder(req, res)
    })    
}