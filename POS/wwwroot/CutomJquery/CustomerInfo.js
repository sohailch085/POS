
////<reference path="../assets/scripts/Angular.min.js" />
//var myapp = angular.module('myapp', []);
//myapp.controller('controllerCustomerInfo', function ($scope, $http, $filter) {
//    debugger;
//    $scope.CustomerType = [];

//    $scope.GetCustomerType = function GetCustomerType() {
//        debugger;
//        $http({
//            method: "GET",
//            url: window.location.origin+ "Customerinfo/GetCustomerType",
//            datatype: 'json',
//            header: { "Content-Type": "application/json" }
//        }).then(function (response) {
//            $scope.CustomerType = JSON.parse(response.data);
//        });
//    };
//    $scope.GetCustomerType();
//});
////'willcrisis.angular-select2'



var myapp = angular.module('myapp', []);
myapp.controller('CustomerInfocontroller', function ($scope, $http, $filter) {
    //$scope.CustomerType = [];
    //debugger;
    //$scope.GetCustomerType = function () {
    //    debugger;
    //    $http.get(window.location.origin + "/CustomerDetails/GetCustomerType", {
    //        headers: { "Content-Type": "application/json" }
    //    }).then(function (response) {
    //        console.log(response);
    //        $scope.CustomerType = JSON.parse(response.data);
    //    });
    //};

    //$scope.GetCustomerType();
});
