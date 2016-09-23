myApp.controller('customerController', function($scope, customerFactory){

    customerFactory.getCustomers(function(data) {
        $scope.customers = data;
        $scope.error = '';
    })

    $scope.addCustomer = function() {
        $scope.error = '';
        for (var i=0; i<$scope.customers.length; i++){
            if ($scope.customers[i].name == $scope.customer.name) {
                $scope.error = 'Customer already exists';
            } 
        }
        if (!$scope.error) {
            customerFactory.addCustomer($scope.customer, function(newCustomer){
                $scope.customers.push(newCustomer);
                $scope.customer.name = '';
            })
        }
    }

    $scope.removeCustomer = function(customer) {
        customerFactory.removeCustomer(customer._id, function() {
            $scope.customers.splice($scope.customers.indexOf(customer),1)
        })
    }
})