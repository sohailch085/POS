var myapp = angular.module('myapp', []);
myapp.controller('CustomerInfoDetailscontroller', function ($scope, $http, $filter) {
    debugger;
    // Function to get query parameters from the URL
    $scope.QueryParams = function getQueryParams() {
        debugger;
        var queryParams = {};
        var queryString = window.location.search.substring(1);
        var pairs = queryString.split('&');

        for (var i = 0; i < pairs.length; i++) {
            debugger
            var pair = pairs[i].split('=');
            queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }

        return queryParams;
    }

    // Get the data from the URL
    var queryParams = $scope.QueryParams();
    var formData = {
        // Access data using the keys from $scope.formData
        // For example: firstName: queryParams.firstName, lastName: queryParams.lastName
    };

    
    $scope.CustomerType = [];
    $scope.ParentGroup = [];
    $scope.GeographicalTerritory = [];
    $scope.Countries = [];
    $scope.ContactType = [];
    $scope.City = [];


    $scope.GetCustomerType = function () {
        $http.get("/Customerinfo/GetCustomerType", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.CustomerType = JSON.parse(response.data);
            $scope.htmlOptions = [{ value: "", Name: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.CustomerType.length; i++) {
                var uppercaseCustomerName = $scope.CustomerType[i].CustomerType.toUpperCase();
                $scope.htmlOptions.push({
                    value: $scope.CustomerType[i].CustomerTypeID,
                    Name: uppercaseCustomerName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCustomerType();
    $scope.GetParentGroup = function () {
        $http.get("/Customerinfo/GetParentGroup", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.ParentGroup = JSON.parse(response.data);
            $scope.htmlParentGroup = [{ value: "", Name: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.ParentGroup.length; i++) {
                var uppercaseParentGroupName = $scope.ParentGroup[i].Parent.toUpperCase();
                $scope.htmlParentGroup.push({
                    value: $scope.ParentGroup[i].ParentGroupID,
                    Name: uppercaseParentGroupName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetParentGroup();
    $scope.GetGeographicalTerritory = function () {
        $http.get("/Customerinfo/GetGeographicalTerritory", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.GeographicalTerritory = JSON.parse(response.data);
            $scope.htmlGeographicalTerritory = [{ value: "", Name: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.GeographicalTerritory.length; i++) {
                var uppercaseGeographicalTerritoryName = $scope.GeographicalTerritory[i].Territory.toUpperCase();
                $scope.htmlGeographicalTerritory.push({
                    value: $scope.GeographicalTerritory[i].Geographical_Territory_ID,
                    Name: uppercaseGeographicalTerritoryName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetGeographicalTerritory();
    $scope.GetContactType = function () {
        $http.get("/Customerinfo/GetContactType", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.ContactType = JSON.parse(response.data);
            $scope.htmlContactType = [{ value: "", Name: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.ContactType.length; i++) {
                var uppercaseContactType = $scope.ContactType[i].Contact_Type.toUpperCase();
                $scope.htmlContactType.push({
                    value: $scope.ContactType[i].Contact_Type_ID,
                    Name: uppercaseContactType,
                    disabled: false
                });
            }
        });
    };
    $scope.GetContactType();
    $scope.GetCountries = function () {
        $http.get("/Customerinfo/GetCountries", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.Countries = JSON.parse(response.data);
            $scope.htmlCountries = [{ value: "", Name: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.Countries.length; i++) {
                var uppercaseCountryName = $scope.Countries[i].CountryName.toUpperCase();
                $scope.htmlCountries.push({
                    value: $scope.Countries[i].CountryID,
                    Name: uppercaseCountryName,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCountries();

    $scope.GetCity = function () {
        debugger;
        $http.get("/Customerinfo/GetCities", {
            headers: { "Content-Type": "application/json" }
            // params: { CountryID: selectedCountryID }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.City = JSON.parse(response.data);
            $scope.htmlCity = [{ value: "", Name: "--Select--", disabled: true, selected: true }];
            for (var i = 0; i < $scope.City.length; i++) {
                var uppercaseCity = $scope.City[i].city.toUpperCase();
                $scope.htmlCity.push({
                    value: $scope.City[i].id,
                    Name: uppercaseCity,
                    disabled: false
                });
            }
        });
    };
    $scope.GetCity();

  

    $scope.btnCustomerDetailsSave = function () {
        $scope.CustomerDetaillist = [];
        $scope.CustomerDetailarry = {};

        debugger;
        var CustomerType = $("#customerTypeSelect").val();
        var CustomerTypeArray = CustomerType.split(':');
        var customerTypeSelectID = CustomerTypeArray[1];

        for (var i = 0; i < $scope.htmlOptions.length; i++) {
            if ($scope.htmlOptions[i].value == parseInt(customerTypeSelectID)) {
                customerTypeLabel = $scope.htmlOptions[i].Name;
                console.log(customerTypeLabel);
                break;
            } else {
                customerTypeLabel = null;
            }
        }
        var CustomerTypeName = customerTypeLabel;

        var ParentGroup = $("#selectedParentGroup").val();
        var ParentGroupArray = ParentGroup.split(':');
        var selectedParentGroupID = ParentGroupArray[1];

        for (var i = 0; i < $scope.htmlParentGroup.length; i++) {
            if ($scope.htmlParentGroup[i].value == parseInt(selectedParentGroupID)) {
                ParentGroupNameLabel = $scope.htmlParentGroup[i].Name;
                console.log(ParentGroupNameLabel);
                break;
            } else {
                ParentGroupNameLabel = null;
            }
        }
        ParentGroupName = ParentGroupNameLabel;

        var GeographicalTerritory = $("#selectedGeographicalTerritory").val();
        var GeographicalTerritoryArray = GeographicalTerritory.split(':');
        var selectedGeographicalTerritoryID = GeographicalTerritoryArray[1];

        for (var i = 0; i < $scope.htmlGeographicalTerritory.length; i++) {
            if ($scope.htmlGeographicalTerritory[i].value == parseInt(selectedGeographicalTerritoryID)) {
                GeographicalTerritoryLabel = $scope.htmlGeographicalTerritory[i].Name;
                console.log(GeographicalTerritoryLabel);
                break;
            } else {
                GeographicalTerritoryLabel = null;
            }
        }
        GeographicalTerritoryName = GeographicalTerritoryLabel;

        var CustomerName = $("#CustomerName").val();
        var ShortName = $("#ShortName").val();
        var AddressLine1 = $("#AddressLine1").val();
        var AddressLine2 = $("#AddressLine2").val();

        var Countries = $("#selectedCountries").val();
        var CountriesArray = Countries.split(':');
        var selectedCountriesID = CountriesArray[1];

        for (var i = 0; i < $scope.htmlCountries.length; i++) {
            if ($scope.htmlCountries[i].value == parseInt(selectedCountriesID)) {
                CountriesLabel = $scope.htmlCountries[i].Name;
                console.log(CountriesLabel);
                break;
            } else {
                CountriesLabel = null;
            }
        }
        CountriesName = CountriesLabel;

        var City = $("#selectedCity").val();
        var CityArray = City.split(':');
        var selectedCityID = CityArray[1];

        for (var i = 0; i < $scope.htmlCity.length; i++) {
            if ($scope.htmlCity[i].value == parseInt(selectedCityID)) {
                CityLabel = $scope.htmlCity[i].Name;
                console.log(CityLabel);
                break;
            } else {
                CityLabel = null;
            }
        }
        CityName = CityLabel;

        var WebAddress = $("#WebAddress").val();
        var PhoneLandline = $("#PhoneLandline").val();
        var Fax = $("#Fax").val();
        var PreferredContactMethod = $("#PreferredContactMethod").val();
        var Retail = $("#Retail").val();
        var Wholesale = $("#Wholesale").val();
        var Warehouse = $("#Warehouse").val();
        var Importer = $("#Importer").val();

        var ContactType = $("#selectedContactType").val();
        var ContactTypeArray = ContactType.split(':');
        var selectedContactTypeID = ContactTypeArray[1];

        for (var i = 0; i < $scope.htmlContactType.length; i++) {
            if ($scope.htmlContactType[i].value == parseInt(selectedContactTypeID)) {
                ContactTypeLabel = $scope.htmlContactType[i].Name;
                console.log(ContactTypeLabel);
                break;
            } else {
                ContactTypeLabel = null;
            }
        }
        ContactTypeName = ContactTypeLabel;

        var Retails = false;
        var Wholesale = false;
        var Warehouse = false;
        var Importer = false;
        if ($scope.Retail = "true") {
            Retails = true;
        }
        if ($scope.Wholesale = "true") {
            Wholesale = true;
        }
        if ($scope.Warehouse = "true") {
            Warehouse = true;
        }
        if ($scope.Importer = "true") {
            Importer = true;
        }

        var Department = $("#Department").val();
        var JobTitle = $("#JobTitle").val();
        var MobileNo = $("#MobileNo").val();
        var Email = $("#Email").val();
        var Id = 0;
        if ($scope.CustomerID != null) {
            Id = parseInt($scope.CustomerID);
        }


        $scope.CustomerDetailarry = {
            CustomerID: Id,
            CustomerName: $scope.CustomerName,
            ShortName: $scope.ShortName,
            CustomerTypeID: customerTypeSelectID,
            CustomerTypeName: CustomerTypeName,
            ParentGroupID: selectedParentGroupID,
            ParentGroupName: ParentGroupName,
            GeographicalTerritoryID: selectedGeographicalTerritoryID,
            GeographicalTerritoryName: GeographicalTerritoryName,
            CountryID: selectedCountriesID,
            CountryName: CountriesName,
            CityID: selectedCityID,
            CityName: CityName,
            WebAddress: $scope.WebAddress,
            PhoneLandLine: $scope.PhoneLandline,
            Fax: $scope.Fax,
            PreferredContactMethod: $scope.PreferredContactMethod,
            Retail: Retails,
            WholeSale: Wholesale,
            WareHouse: Warehouse,
            Importer: Importer,
            ContactTypeID: selectedContactTypeID,
            ContactTypeName: ContactTypeName,
            Department: $scope.Department,
            Name: $scope.Name,
            JobTitle: $scope.JobTitle,
            MobileNo: $scope.MobileNo,
            Email: $scope.Email,
        }
        $scope.CustomerDetaillist.push($scope.CustomerDetailarry);
        $http({
            method: "POST",
            url: "/Customerinfo/CustomerDetailsSave",
            datatype: 'json',
            header: { "Content-Type": "application/json" },
            data: JSON.stringify({ lstCustomrInfo: $scope.CustomerDetaillist })
        }).then(function (response) {
            // console.log(JSON.stringify({ lstCustomrInfo: $scope.CustomerDetaillist }));
        }).finally(function () {

        });



    }
});