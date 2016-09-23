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
	this.deleteCustomer = function(req, res){
		Customer.findOne({_id:req.params.id}, function(err, customer){
			console.log(customer)
			if (err) {
				console.log('that customer does not exist', err)
			} else {
				customer.remove();
			}
		})
	}
}

module.exports = new customerController();