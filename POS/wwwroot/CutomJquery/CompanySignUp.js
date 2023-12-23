
angular.module('appLogin', [])
    .controller('controllerCompanysignup', function ($scope, $http, $filter) {
        debugger;

        $scope.Companysignuplist = [];
        $scope.Companysignuparry = {};
        $scope.linkClearform = function () {
            debugger;
            $scope.CompanyName = '';
            $scope.Country = '';
            $scope.FirstName = '';
            $scope.LastName = '';
            $scope.ContactEmail = '';
            $scope.ContactPhone = '';
            $scope.WebSite = '';
            $scope.PreferredContactMethod = '';
            $scope.Address = '';
            $scope.BusinessDescription = '';
            $scope.Companysignuparry = {};
        }
        $scope.btnCompanySignUpSave = function () {
            debugger;
            var CompanyName = $("#CompanyName").val();
            var Country = $("#Country").val();
            var FirstName = $("#FirstName").val();
            var LastName = $("#LastName").val();           
            if ((CompanyName !== "" && CompanyName !== "undefined") &&
                (Country !== "" && Country !== "undefined") &&
                (FirstName !== "" && FirstName !== "undefined") &&
                (LastName !== "" && LastName !== "undefined")) {
                $scope.Companysignuparry = {
                    CompanyName: $scope.CompanyName,
                    Country: $scope.Country,
                    FirstName: $scope.FirstName,
                    LastName: $scope.LastName,
                    ContactEmail: $scope.ContactEmail,
                    ContactPhone: $scope.ContactPhone,
                    WebSite: $scope.WebSite,
                    PreferredContactMethod: $scope.PreferredContactMethod,
                    Address: $scope.Address,
                    BusinessDescription: $scope.BusinessDescription,
                }
                $scope.Companysignuplist.push($scope.Companysignuparry);
                $scope.linkClearform();
                $http({
                    method: "POST",
                    url: "Login/CompanySignUpSave",
                    datatype: 'json',
                    header: { "Content-Type": "application/json" },                   
                    data: JSON.stringify({ lstcompanySignups: $scope.Companysignuplist }) 
                }).then(function (response) {
                    $scope.linkClearform();
                }).finally(function () {
                   
                  
                });
            }
            
        }
    });