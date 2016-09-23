var mongoose = require('mongoose');
var Order = mongoose.model('Order');

function OrderController(){
	this.getOrders = function(req, res){
		Order.find({}, function(err, orders){
			if(err){
				console.log(err);
				console.log('getorders did not work', err);
			} else {
				res.json(orders);
			}
		})		
	}
	this.createOrder = function(req, res){
		
	}
}

module.exports = new OrderController();