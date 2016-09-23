myApp.controller('productController', function($scope, productFactory){

    productFactory.getProducts(function(data) {
        $scope.products = data;
    })

    $scope.addProduct = function() {
        console.log($scope.product)
        productFactory.addProduct($scope.product, function(newProduct) {
            $scope.products.push(newProduct);
            $scope.product.product_name = '';
            $scope.product.image = '';
            $scope.product.description = '';
            $scope.product.quantity = '';
        })
    }    
})