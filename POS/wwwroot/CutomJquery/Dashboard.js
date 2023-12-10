angular.module('myapp', ['chart.js']);


angular.module('myapp')
    .controller('MyController', function ($scope, $timeout) {
        //$scope.labels = ["January", "February", "March", "April", "May", "June", "July", "August"];
        //$scope.series = ['Series A', 'Series B'];
        //$scope.data = [
        //    [65, 59, 80, 81, 56, 55, 40, 10],
        //    [28, 48, 40, 19, 86, 27, 90, 200]
        //];
        //$scope.onClick = function (points, evt) {
        //    console.log(points, evt);
        //};

        //// Simulate async data update
        //$timeout(function () {
        //    $scope.data = [
        //        [28, 48, 40, 19, 86, 27, 90, 200],
        //        [65, 59, 80, 81, 56, 55, 40, 10]
        //    ];
        //}, 3000);
    });
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myapp']);
});