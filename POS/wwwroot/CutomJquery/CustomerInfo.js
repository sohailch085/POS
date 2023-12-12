var myapp = angular.module('myapp', []);
myapp.controller('controllerCustomerInfo', function ($scope, $http, $filter) {

    $('#example').DataTable();
    var table = $('#example2').DataTable({
        lengthChange: false,
        buttons: ['copy', 'excel', 'pdf', 'print']

         table.buttons().container()
            .appendTo('#example2_wrapper .col-md-6:eq(0)');
    });
})
//'willcrisis.angular-select2'
