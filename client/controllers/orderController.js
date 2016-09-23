myApp.controller('orderController', function(
    $scope, orderFactory, productFactory, customerFactory){

    orderFactory.getOrders(function(data) {
        $scope.orders = data;
    })
    customerFactory.getCustomers(function(data) {
        $scope.customers = data;
    })

    productFactory.getProducts(function(data) {
        $scope.products = data;
    })


    $scope.addOrder = function() {
        orderFactory.addOrder($scope.order, function(neworder){
            $scope.orders.push(neworder);
            $scope.order.name = '';
        })
    }

})