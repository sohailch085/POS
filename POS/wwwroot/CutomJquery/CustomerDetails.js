var myapp = angular.module('myapp', []);
myapp.controller('CustomerInfoDetailscontroller', function ($scope, $http, $filter) {
    debugger;
    $scope.CustomerType = [];
    $scope.ParentGroup = [];
    $scope.GeographicalTerritory = [];
    $scope.Countries = [];
    $scope.ContactType = [];
    $scope.City = [];


   
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
                var uppercaseCustomerName = $scope.CustomerType[i].CustomerType.toUpperCase();
                $scope.htmlOptions.push({
                    value: $scope.CustomerType[i].CustomerTypeID,
                    label: uppercaseCustomerName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetParentGroup = function () {
        $http.get("/Customerinfo/GetParentGroup", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.ParentGroup = JSON.parse(response.data);
            $scope.htmlParentGroup = [{ value: "", label: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.ParentGroup.length; i++) {
                var uppercaseParentGroupName = $scope.ParentGroup[i].Parent.toUpperCase();
                $scope.htmlParentGroup.push({
                    value: $scope.ParentGroup[i].ParentGroupID,
                    label: uppercaseParentGroupName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetGeographicalTerritory = function () {
        $http.get("/Customerinfo/GetGeographicalTerritory", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.GeographicalTerritory = JSON.parse(response.data);
            $scope.htmlGeographicalTerritory = [{ value: "", label: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.GeographicalTerritory.length; i++) {
                var uppercaseGeographicalTerritoryName = $scope.GeographicalTerritory[i].Territory.toUpperCase();
                $scope.htmlGeographicalTerritory.push({
                    value: $scope.GeographicalTerritory[i].Geographical_Territory_ID,
                    label: uppercaseGeographicalTerritoryName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCountries = function () {
        $http.get("/Customerinfo/GetCountries", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.Countries = JSON.parse(response.data);
            $scope.htmlCountries = [{ value: "", label: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.Countries.length; i++) {
                var uppercaseCountryName = $scope.Countries[i].CountryName.toUpperCase();
                $scope.htmlCountries.push({
                    value: $scope.Countries[i].CountryID,
                    label: uppercaseCountryName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetContactType = function () {
        $http.get("/Customerinfo/GetContactType", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.ContactType = JSON.parse(response.data);
            $scope.htmlContactType = [{ value: "", label: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.ContactType.length; i++) {
                var uppercaseContactType = $scope.ContactType[i].Contact_Type.toUpperCase();
                $scope.htmlContactType.push({
                    value: $scope.ContactType[i].Contact_Type_ID,
                    label: uppercaseContactType,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCity = function () {
        $http.get("/Customerinfo/GetCities", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.City = JSON.parse(response.data);
            $scope.htmlCity = [{ value: "", label: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.City.length; i++) {
                var uppercaseCity = $scope.City[i].city.toUpperCase();
                $scope.htmlCity.push({
                    value: $scope.City[i].id,
                    label: uppercaseCity,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCustomerType();
    $scope.GetParentGroup();
    $scope.GetGeographicalTerritory();
    $scope.GetCountries();
    $scope.GetContactType();
    $scope.GetCity()

});
