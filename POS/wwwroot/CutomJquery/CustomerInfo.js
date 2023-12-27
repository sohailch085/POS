
$(document).ready(function () {
    LoadData();
});

function LoadData() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/Customerinfo/LoadCusotmerInfo",
        async: false,
        success: function (response) {
            debugger;
            var CustomerList = JSON.parse(response)           
            var html = '';
            for (var i = 0; i < CustomerList.length; i++) {
                html += '<tr><td>' + CustomerList[i].CustomerName + '</td>' +
                    '<td>' + CustomerList[i].ShortName + '</td>' +
                    '<td>' + CustomerList[i].ParentGroupName + '</td>' +
                    '<td>' + CustomerList[i].CountryName + '</td>' +
                    '<td>' + CustomerList[i].CustomerID + '</td>' +
                    '<td><svg onclick="GetCustomerFilter(' + CustomerList[i].CustomerID + ')" xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="pen"><path d="m46.242 10.245-4.467 4.467-8.616-8.352 4.599-4.599a5.999 5.999 0 1 1 8.484 8.484zm-7.083 7.08L11.694 44.79 0 48.048l3.207-11.739L30.57 8.946l8.589 8.379z"></path></svg>' +
                    '</td ><td></td></tr > ';
            }
            $("#example2 tbody").append(html);
        }
    });
}
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
            window.location = '../Customerinfo/CustomerDetails?Id=' + id;
        }
    });
}



