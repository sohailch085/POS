﻿$(document).ready(function () {
    GetCountries();
    GetCity();
    GetSupplierType();
    GetVenderVerticalIntegration();
});
function GetCountries() {
    $.ajax({
        type: "GET",
        url: "/SupplierInfo/GetCountries",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var Countries = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < Countries.length; i++) {
                var uppercaseCountryName = Countries[i].CountryName.toUpperCase();
                htmlOptions += '<option id=' + Countries[i].CountryID + '>' + uppercaseCountryName + '</option>'
            }
            $("#Country").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetCity() {
    $.ajax({
        type: "GET",
        url: "/SupplierInfo/GetCities",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var City = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < City.length; i++) {
                var uppercaseCityName = City[i].CityName.toUpperCase();
                htmlOptions += '<option id=' + City[i].id + '>' + uppercaseCityName + '</option>'
            }
            $("#City").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetSupplierType() {
    $.ajax({
        type: "GET",
        url: "/SupplierInfo/GetSupplierType",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var SupplierType = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < SupplierType.length; i++) {
                var uppercaseSupplierTypeName = SupplierType[i].SupplierTypeName.toUpperCase() + ' ' + SupplierType[i].Code;
                htmlOptions += '<option id=' + SupplierType[i].TypeId + '>' + uppercaseSupplierTypeName + '</option>'
            }
            $("#SupplierType").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetVenderVerticalIntegration() {
    $.ajax({
        type: "GET",
        url: "/SupplierInfo/GetVenderVerticalIntegration",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var VenderVerticalIntegration = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < VenderVerticalIntegration.length; i++) {
                var uppercaseVenderVerticalIntegration = VenderVerticalIntegration[i].Name.toUpperCase();
                htmlOptions += '<option id=' + VenderVerticalIntegration[i].VenderVerticalID + '>' + uppercaseVenderVerticalIntegration + '</option>'
            }
            $("#VerticalIntegration").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetFabricProcess() {
    $.ajax({
        type: "GET",
        url: "/SupplierInfo/GetFabricProcess",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var FabricProcess = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < FabricProcess.length; i++) {
                var uppercaseFabricProcess = FabricProcess[i].Fabric.toUpperCase();
                htmlOptions += '<option id=' + FabricProcess[i].FabricProcessId + '>' + uppercaseFabricProcess + '</option>'
            }
            $("#FabricProcessed").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}