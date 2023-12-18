var myapp = angular.module('myapp', []);
myapp.controller('CustomerInfoDetailscontroller', function ($scope, $http, $filter) {
    debugger;
    $scope.CustomerType = [];
    debugger;
    $scope.GetCustomerType = function () {
        $http.get("/Customerinfo/GetCustomerType", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.CustomerType = JSON.parse(response.data);
            $scope.htmlOptions = [{ value: "", label: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.CustomerType.length; i++) {
                $scope.htmlOptions.push({
                    value: $scope.CustomerType[i].CustomerTypeID,
                    label: $scope.CustomerType[i].CustomerType,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCustomerType();
});
