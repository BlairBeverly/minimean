var customerController = require('../controllers/customers.js')

module.exports = function(app){
    app.get('/customers', function(req, res) {
        customerController.getCustomers(req, res)
    })
	app.post('/customers', function(req, res){
		// console.log(req.body);
		customerController.createCustomer(req, res);
	})
}