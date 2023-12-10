/*angular.module('appLogin', ['willcrisis.angular-select2']);*/


angular.module('appLogin', [])
    .controller('controllerLogin', function ($scope, $http, $filter) {

    });
angular.element(document).ready(function () {
    angular.bootstrap(document, ['appLogin']);
});
//$(document).ready(function () {
//    //$('#Hearder').hide();
//    //$('#Sidebar').hide();

//    $('#Login').click(function () {

//        debugger;
//        window.location = 'Home/Dashboard';
//    });

//});


//angular.module('appLogin', ['willcrisis.angular-select2'])
//    .controller('controllerCompanysignup', function ($scope, $http, $filter) {
//        // Your controller logic here
//    });