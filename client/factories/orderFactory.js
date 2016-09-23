myApp.factory('orderFactory', function($http){

	var factory = {}

	factory.getOrders = function(callback){
		$http.get('/orders').then(function(data){
			callback(data.data);
		});
	}

	factory.addOrder = function(info, callback){
		$http.post('/orders', info).then(function(data){
			if(data.error){
				callback(data);
			} else {
				callback(data.data);
			}
		})
	}

	return factory;
})