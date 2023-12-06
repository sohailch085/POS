angular.module('appLogin', [])
    .controller('controllerCompanysignup', function ($scope, $http, $filter) {
        debugger;
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
        }
        //$scope.Companysignuplist = []
        $scope.Companysignuparry = {};

        $scope.btnsave = function () {
            debugger;
            $scope.Companysignuplist = []

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
                url: "/CompanySignUpSave",
                datatype: 'json',
                header: { "Content-Type": "application/json" },
                data: JSON.stringify({ lstcompanySignups: $scope.Companysignuplist })
            }).then(function (response) {
                $scope.Companysignuparry.CompanyName = null;
                $scope.Companysignuparry.Country = null;
                $scope.Companysignuparry.FirstName = null;
                $scope.Companysignuparry.LastName = null;
                $scope.Companysignuparry.ContactEmail = null;
                $scope.Companysignuparry.ContactPhone = null;
                $scope.Companysignuparry.WebSite = null;
                $scope.Companysignuparry.PreferredContactMethod = null;
                $scope.Companysignuparry.Address = null;
                $scope.Companysignuparry.BusinessDescription = null;
                $scope.linkClearform();
            });
        }
    });
//angular.element(document).ready(function () {
//    angular.bootstrap(document, ['myapp']);
//});