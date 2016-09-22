myApp.controller('customerController', function($scope, customerFactory){

    customerFactory.getCustomers(function(data) {
        $scope.customers = data;
    })

    $scope.addCustomer = function() {
        customerFactory.addCustomer($scope.customer, function(data){
            $scope.customers = data
        })
    }

    $scope.removeCustomer = function(customer) {
        customerFactory.removeCustomer(customer, function() {
            console.log('got data back from customerFactory')
            // do something with $scope.customers 
        })
    }
})