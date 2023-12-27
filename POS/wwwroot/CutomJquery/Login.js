/*angular.module('appLogin', ['willcrisis.angular-select2']);*/


//angular.module('appLogin', [])
//    .controller('Logincontroller', function ($scope, $http, $filter) {
//        debugger;
//        $scope.Loginlist = [];
//        $scope.Loginarry = {};
//        $scope.linkClearform = function () {
//            debugger;
//            $scope.Email = '';
//            $scope.PasswordHash = '';
//            $scope.Loginarry = {};
//            //  $scope.Loginlist = [];
//        }

//        $scope.btnLogin = function () {
//            debugger;
//            var Email = $("#Email").val();
//            var PasswordHash = $("#PasswordHash").val();
//            if ((Email !== "" && Email !== "undefined") &&
//                (PasswordHash !== "" && PasswordHash !== "undefined")) {
//                debugger;
//                //$scope.Loginarry = {
//                //    Email: $scope.Email,
//                //    PasswordHash: $scope.PasswordHash,
//                //}
//                //$scope.Loginlist.push($scope.Loginarry);
//                //$scope.linkClearform();
//                $http({
//                    method: "POST",
//                    url: "/Login/LoginVerify?Email=" + $scope.Email + "&Password=" + $scope.PasswordHash + "",
//                    datatype: 'json',
//                    header: { "Content-Type": "application/json" },
//                    data: {} //JSON.stringify({ Email: $scope.Email, Password: $scope.PasswordHash })
//                }).then(function (response) {
//                   /* var data = JSON.parse(response.data);*/
//                    debugger;
//                    //angular.forEach(data, function (item) {
//                    //    if (item.Email == $scope.Email && item.PasswordHash == $scope.PasswordHash) {
//                    //        $scope.linkClearform();
//                    //        location.href = "/Home/Index";
//                    //    }
//                    //});
//                    //console.log(item);
//                    if (response.data == "true") {
//                        window.location.href= "../Home/Index";
//                    }
//                }).finally(function () {


//                });
//            }
//        }

//    });
//angular.element(document).ready(function () {
//    angular.bootstrap(document, ['appLogin']);
//});

$(document).ready(function () {
    $("#Login").click(function () {
        debugger;
        var Email = $("#Email").val();
        var PasswordHash = $("#PasswordHash").val();
        
        var postData = {
            Email: Email,
            PasswordHash: PasswordHash
        };
        var PostDataList = [];
        PostDataList.push(postData);
        $.ajax({
            type: "POST",
            url: "/Login/LoginVerify", 
            contentType: 'application/json',
            data: JSON.stringify({ lstLogin: PostDataList }),
            async: false,
            /*dataType: "json", */
            success: function (response) {
                console.log(response);
               /* if (response.success) {*/
               // window.location.href = "../Home/Index";
                window.location = '../Home/Index';
                //} else {
                   
                //}
            },
            error: function (error) {
                console.error("Error during login request:", error);
            }
        });
    });

});