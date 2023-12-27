$(document).ready(function () {
    GetCustomerType();
    GetParentGroup();
    GetGeographicalTerritory();
    GetCountries();
    GetCity();
    GetContactType();
    debugger;
    var currentUrl = window.location.href;
    var urlParams = new URLSearchParams(new URL(currentUrl).search);
    var Id = urlParams.get('Id');

    if (Id == null || Id == 0 || Id == "undefined") {

    } else {
        GetCustomerFilter(Id)
    }
    $("#btnCustomerSave").click(function () {
        debugger;
        var CustomerDetaillist = [];
        var CustomerDetailarry = {};

        var Id = $("#CustomerID").val();
        if (Id == "" || Id == "NaN" || Id == null) {
            Id = 0;
        } else {
            Id = parseInt($("#CustomerID").val()); 
        }
        var CustomerTypeID = $('#customerType option:selected').attr('id'); 
        var CustomerTypeName = $('#customerType :selected').text();
        var ParentGroupID = $('#ParentGroup option:selected').attr('id'); 
        var ParentGroupName = $('#ParentGroup :selected').text();
        var GeographicalTerritoryID = $('#GeographicalTerritory option:selected').attr('id'); 
        var GeographicalTerritoryName = $('#GeographicalTerritory :selected').text();
        var CustomerName = $("#CustomerName").val();
        var ShortName = $("#ShortName").val();
        var AddressLine1 = $("#AddressLine1").val();
        var AddressLine2 = $("#AddressLine2").val();
        var CountriesID = $('#Countries option:selected').attr('id'); 
        var CountriesName = $('#Countries :selected').text();
        var CityID = $('#City option:selected').attr('id'); 
        var CityName = $('#City :selected').text();
        var WebAddress = $("#WebAddress").val();
        var PhoneLandline = $("#PhoneLandline").val();
        var Fax = $("#Fax").val();
        var PreferredContactMethodName = $('#PreferredContactMethod :selected').text();
        
        var Retails = $("#Retail").is(':checked');
        var Wholesale = $("#Wholesale").is(':checked');
        var Warehouse = $("#Warehouse").is(':checked');
        var Importer = $("#Importer").is(':checked');
       
        var ContactTypeID = $('#ContactType option:selected').attr('id'); 
        var ContactTypeName = $('#ContactType :selected').text();
        var Department = $("#Department").val();
        var Name = $("#Name").val();
        var JobTitle = $("#JobTitle").val();
        var MobileNo = $("#MobileNo").val();
        var Email = $("#Email").val();

        CustomerDetailarry = {
            CustomerID: Id,
            CustomerName: CustomerName,
            ShortName: ShortName,
            AddressLine1: AddressLine1,
            AddressLine2: AddressLine2,
            CustomerTypeID: CustomerTypeID,
            CustomerTypeName: CustomerTypeName,
            ParentGroupID: ParentGroupID,
            ParentGroupName: ParentGroupName,
            GeographicalTerritoryID: GeographicalTerritoryID,
            GeographicalTerritoryName: GeographicalTerritoryName,
            CountryID: CountriesID,
            CountryName: CountriesName,
            CityID: CityID,
            CityName: CityName,
            WebAddress: WebAddress,
            PhoneLandLine: PhoneLandline,
            Fax: Fax,
            PreferredContactMethod: PreferredContactMethodName,
            Retail: Retails,
            WholeSale: Wholesale,
            WareHouse: Warehouse,
            Importer: Importer,
            ContactTypeID: ContactTypeID,
            ContactTypeName: ContactTypeName,
            Department: Department,
            Name: Name,
            JobTitle: JobTitle,
            MobileNo: MobileNo,
            Email: Email,
        }

        CustomerDetaillist.push(CustomerDetailarry);

        $.ajax({
            method: "POST",
            url: "/Customerinfo/CustomerDetailsSave",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({ lstCustomrInfo: CustomerDetaillist }),
            success: function (response) {
                
                console.log(response);
            },
            error: function (error) {               
                console.error('Error saving customer details:', error);
            }
        });
    });
    $("#btnCustomerDelete").click(function () {
        var customerId = $("#CustomerID").val();
        $.ajax({
            method: "GET",
            url: "/Customerinfo/DeleteRecord",
            dataType: 'json',
            contentType: 'application/json',
            data: { Id: customerId },
            success: function (response) {                
                console.log(response);
            },
            error: function (error) {                
                console.error('Error deleting customer record:', error);
            }
        });
    });
});
function GetCustomerFilter(id) {
    debugger;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/Customerinfo/GetFilterData",
        data: { Id: id },
        async: false,
        success: function (response) {
            debugger;
            var CustomeruploadData = JSON.parse(response)
            for (var i = 0; i < CustomeruploadData.length; i++) {
                $("#CustomerID").val(CustomeruploadData[i].CustomerID); 
                var CustomerTypeNameToSelect = CustomeruploadData[i].CustomerTypeName;
                $("#customerType").val(function () {
                    return $("#customerType option").filter(function () {
                        return $(this).text() === CustomerTypeNameToSelect;
                    }).val();
                });
                var parentGroupNameToSelect = CustomeruploadData[i].ParentGroupName;
                $("#ParentGroup").val(function () {
                    return $("#ParentGroup option").filter(function () {
                        return $(this).text() === parentGroupNameToSelect;
                    }).val();
                });
                var GeographicalTerritoryNameToSelect = CustomeruploadData[i].GeographicalTerritoryName;
                $("#GeographicalTerritory").val(function () {
                    return $("#GeographicalTerritory option").filter(function () {
                        return $(this).text() === GeographicalTerritoryNameToSelect;
                    }).val();
                });
                $("#CustomerName").val(CustomeruploadData[i].CustomerName);
                $("#ShortName").val(CustomeruploadData[i].ShortName);
                $("#AddressLine1").val(CustomeruploadData[i].AddressLine1);
                $("#AddressLine2").val(CustomeruploadData[i].AddressLine2);

                var CountryNameToSelect = CustomeruploadData[i].CountryName;
                $("#Countries").val(function () {
                    return $("#Countries option").filter(function () {
                        return $(this).text() === CountryNameToSelect;
                    }).val();
                });
                var CityNameToSelect = CustomeruploadData[i].CityName;
                $("#City").val(function () {
                    return $("#City option").filter(function () {
                        return $(this).text() === CityNameToSelect;
                    }).val();
                });
                $("#City ").children("option").filter(":selected").val(CustomeruploadData[i].CityID);
                $("#City ").children("option").filter(":selected").text(CustomeruploadData[i].CityName);
                $("#WebAddress").val(CustomeruploadData[i].WebAddress);
                $("#PhoneLandline").val(CustomeruploadData[i].PhoneLandLine);
                $("#Fax").val(CustomeruploadData[i].Fax);
                $("#PreferredContactMethod ").children("option").filter(":selected").text(CustomeruploadData[i].PreferredContactMethod);

                var retailValue = CustomeruploadData[i].Retail;
                $("#Retail").prop("checked", retailValue);

                var WholesaleValue = CustomeruploadData[i].WholeSale;
                $("#Wholesale").prop("checked", WholesaleValue);

                var WarehouseValue = CustomeruploadData[i].WareHouse;
                $("#Warehouse").prop("checked", WarehouseValue);

                var ImporterValue = CustomeruploadData[i].Importer;
                $("#Importer").prop("checked", ImporterValue);

                var ContactTypeNameToSelect = CustomeruploadData[i].ContactTypeName;
                $("#ContactType").val(function () {
                    return $("#ContactType option").filter(function () {
                        return $(this).text() === ContactTypeNameToSelect;
                    }).val();
                });

                $("#Department").val(CustomeruploadData[i].Department);
                $("#Name").val(CustomeruploadData[i].Name);
                $("#JobTitle").val(CustomeruploadData[i].JobTitle);
                $("#MobileNo").val(CustomeruploadData[i].MobileNo);
                $("#Email").val(CustomeruploadData[i].Email);

            }

        }
    });
}
function GetCustomerType() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Customerinfo/GetCustomerType",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var CustomerType = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < CustomerType.length; i++) {
                var uppercaseCustomerName = CustomerType[i].CustomerTypeName.toUpperCase();
                htmlOptions += '<option id=' + CustomerType[i].CustomerTypeID + '>' + uppercaseCustomerName + '</option>'
            }
            $("#customerType").append(htmlOptions);         
        },
        error: function (error) {
            console.error("Error getting customer type:", error);
        }
    });
}
function GetParentGroup() {
    $.ajax({
        type: "GET",
        url: "/Customerinfo/GetParentGroup",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var ParentGroup = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < ParentGroup.length; i++) {
                var uppercaseParentGroupName = ParentGroup[i].Parent.toUpperCase();
                htmlOptions += '<option id=' + ParentGroup[i].ParentGroupID + '>' + uppercaseParentGroupName + '</option>'
            }
            $("#ParentGroup").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}

function GetGeographicalTerritory() {
    $.ajax({
        type: "GET",
        url: "/Customerinfo/GetGeographicalTerritory",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var GeographicalTerritory = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < GeographicalTerritory.length; i++) {
                var uppercaseGeographicalTerritoryName = GeographicalTerritory[i].Territory.toUpperCase();
                htmlOptions += '<option id=' + GeographicalTerritory[i].Geographical_Territory_ID + '>' + uppercaseGeographicalTerritoryName + '</option>'
            }
            $("#GeographicalTerritory").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}

function GetCountries() {
    $.ajax({
        type: "GET",
        url: "/Customerinfo/GetCountries",
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
            $("#Countries").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetCity() {
    $.ajax({
        type: "GET",
        url: "/Customerinfo/GetCities",
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
function GetContactType() {
    $.ajax({
        type: "GET",
        url: "/Customerinfo/GetContactType",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var ContactType = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'

            for (var i = 0; i < ContactType.length; i++) {
                var uppercaseContactType = ContactType[i].Contact_Type.toUpperCase();
                htmlOptions += '<option id=' + ContactType[i].Contact_Type_ID + '>' + uppercaseContactType + '</option>'
            }
            $("#ContactType").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}

