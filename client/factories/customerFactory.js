myApp.factory('customerFactory', function($http){

	var factory = {}

	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(data){
			callback(data.data);
		});
	}

	factory.removeCustomer = function(id, callback){
		$http.delete('/customers/' + id)
		callback()
	}

	factory.addCustomer = function(info, callback){
		$http.post('/customers', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data.data);
			}
		})
	}

	return factory;
})