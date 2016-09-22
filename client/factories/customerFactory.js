myApp.factory('customerFactory', function($http){

	// This is my dummyFactory. I usually add this into any project that 
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well 
	// as how we would create a get request. 


	var customers = []

	var factory = {}

	factory.getCustomers = function(callback){
		$http.get('/customers').then(function(data){
			// console.log(data)
			customers = data.data;
			callback(data.data);
		});
	}

	factory.removeCustomer = function(customer, callback){
		$http.delete('/customer', customer)
		callback()
	}

	// the info parameter below is the the dummy that we're trying to add into our database

	// I added a test for myself below. I'm passing both a body element as well a params element
	// I use this as an initial test that I can pass information to my backend.
	// Check out your server console and you should see the body and the value we pass through 
	// the url. 
	factory.addCustomer = function(info, callback){
		console.log(info)
		$http.post('/customers', info).then(function(data){
			console.log(data)
			if(data.error){
				callback(data);
			} else {
				customers.push(data.data)
				callback(customers);
			}
		})
	}

	return factory;
})