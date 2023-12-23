
var myapp = angular.module('myapp', []);
myapp.controller('CustomerInfocontroller', function ($scope, $http, $filter) {
    //Dropdown box strat list
    debugger;
    //End dropdown box list
    $scope.CustomerList = [];
    debugger;
    $scope.GetCustomerLoad = function () {
        debugger;
        $http.get("/Customerinfo/LoadCusotmerInfo", {
            headers: { "Content-Type": "application/json" }
        }).then(function (response) {
            debugger;
            console.log(response);
            $scope.CustomerList = JSON.parse(response.data);
            //var CustomerList = JSON.parse(response.data);
            //var html = "";
            //debugger;
            //for (var i = 0; i < CustomerList.length; i++) {
            //    html += '<tr><td>' + CustomerList[i].CustomerName + '</td>' +
            //        '<td>' + CustomerList[i].ShortName + '</td>' +
            //        '<td>' + CustomerList[i].ParentGroupName + '</td>' +
            //        '<td>' + CustomerList[i].CountryName + '</td>' +
            //        '<td>' + CustomerList[i].CustomerID + '</td>' +
            //        '<td ng-click="GetCustomerFilter(' + CustomerList[i].CustomerID + ')"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="pen"><path d="m46.242 10.245-4.467 4.467-8.616-8.352 4.599-4.599a5.999 5.999 0 1 1 8.484 8.484zm-7.083 7.08L11.694 44.79 0 48.048l3.207-11.739L30.57 8.946l8.589 8.379z"></path></svg>' +
            //        '</td ></tr > ';
            //}

            //// Append the generated HTML to the tbody element
            //$("#CustomerInfoData").append(html);
            //angular.forEach(CustomerList, function (item) {ng-click=' + GetCustomerFilter(i.CustomerID) + '
            //    html += '<tr><td>' + item.CustomerName + '</td><td>' + item.ShortName + '</td><td>' + item.ParentGroupName + '</td><td>' + item.CountryName + '</td><td>' + item.DocumentFile + '</td><td ng-click=' + GetCustomerFilter(item.CustomerID) + '>'+
            //   ' </td ></tr > ';
            //});
            // ("#CustomerInfoData").append(html);
        });
    };
    $scope.GetCustomerLoad();

    //Start Customer Details

    $scope.GetCustomerFilter = function GetCustomerFilter(ID) {
        debugger;
        $scope.CustomerData = [];

        $http.get("/Customerinfo/GetFilterData", {
            headers: { "Content-Type": "application/json" },
            params: { Id: ID }
        }).then(function (response) {
            $scope.formData = {};
            $scope.formData = JSON.parse(response.data);
            var queryString = Object.keys($scope.formData)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent($scope.formData[key]))
                .join('&');
            $scope.submitFirstForm();
            window.location.href = "../Customerinfo/CustomerDetails?"+ queryString;
            //for (var i = 1; i <= CustomerData.length; i++) {
            //    location.href = "../Customerinfo/CustomerDetails"
            //    debugger;
            //     ("#CustomerID").val(i.CustomerID);
            //    $scope.CustomerID = i.CustomerID;
            //$scope.selectedCustomerType = $scope.CustomerData[i].CustomerTypeID.toString();
            //$scope.selectedParentGroup = $scope.CustomerData[i].ParentGroupID.toString();
            //$scope.selectedGeographicalTerritory = $scope.CustomerData[i].GeographicalTerritoryID.toString();
            //$scope.CustomerName = $scope.CustomerData[i].CustomerName.toString();
            //$scope.ShortName = $scope.CustomerData[i].ShortName.toString();
            //$scope.AddressLine1 = $scope.CustomerData[i].AddressLine1.toString();
            //$scope.AddressLine2 = $scope.CustomerData[i].AddressLine2.toString();
            //$scope.selectedCountries = $scope.CustomerData[i].CountryID.toString();
            //$scope.selectedCity = $scope.CustomerData[i].CityID.toString();
            //$scope.WebAddress = $scope.CustomerData[i].WebAddress.toString();
            //$scope.PhoneLandline = $scope.CustomerData[i].PhoneLandline.toString();
            //$scope.Fax = $scope.CustomerData[i].Fax.toString();
            //$scope.PreferredContactMethod = $scope.CustomerData[i].PreferredContactMethod.toString();
            //$scope.Retail = $scope.CustomerData[i].Retail.toString();
            //$scope.Wholesale = $scope.CustomerData[i].Wholesale.toString();
            //$scope.Warehouse = $scope.CustomerData[i].Warehouse.toString();
            //$scope.Importer = $scope.CustomerData[i].Importer.toString();
            //$scope.selectedContactType = $scope.CustomerData[i].ContactTypeID.toString();
            //$scope.Department = $scope.CustomerData[i].Department.toString();
            //$scope.Name = $scope.CustomerData[i].Name.toString();
            //$scope.JobTitle = $scope.CustomerData[i].JobTitle.toString();
            //$scope.MobileNo = $scope.CustomerData[i].MobileNo.toString();
            //$scope.Email = $scope.CustomerData[i].Email.toString();
            //window.location.href = "../Customerinfo/CustomerDetails";

            // }

        });
    };
    $scope.submitFirstForm = function () {
        // Send data to server
        debugger;
        $http.post('/Customerinfo/CustomerDetails', $scope.formData)
            .then(function (response) {
                debugger;
                // Update second form with the received data
                $scope.formData = response.data;
            })
            .catch(function (error) {
                console.error('Error submitting data:', error);
            });
    };
   
    //End Customer Details

});


