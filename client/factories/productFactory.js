myApp.factory('productFactory', function($http){

	var factory = {}

	factory.getProducts = function(callback) {
		$http.get('/products').then(function(data){
			callback(data.data);
		})
	}

	factory.addProduct = function(info, callback) {
		console.log('calling addProduct on factory')
		$http.post('/products', info).then(function(data) {
			if(data.error){
				callback(data);
			} else {
				callback(data.data);
			}
		})
	}

	return factory;
})