var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');
var dateFormat = require('dateformat')

function customerController(){
	this.getCustomers = function(req, res){
		Customer.find({}, function(err, customers){
			if(err){
				console.log(err);
				console.log('getcustomers function customer controller');
			} else {
				res.json(customers);
			}
		})		
	}
	this.createCustomer = function(req, res){
		var customer = new Customer({name: req.body.name})
		customer.save(function(err, newCustomer) {
			if (err) {
				console.log("error creating customer", err)
			} else {
				console.log("successfully created customer")
				console.log(newCustomer)
				return res.json(newCustomer);
			}
		})
	}
}

module.exports = new customerController();