var myapp = angular.module('myapp', []);
myapp.controller('controllerCustomerInfoDetails', function ($scope, $http, $filter) {
    $scope.CustomerType = [];
    debugger;
    $scope.GetCustomerType = function () {
        debugger;
        $http.get("/Customerinfo/GetCustomerType", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            console.log(response);
            $scope.CustomerType = JSON.parse(response.data);
        });
    };

    $scope.GetCustomerType();
});