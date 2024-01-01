$(document).ready(function () {

    //CreateCard("", "");
    // NewCare("", "");

    //$("#CreateCard").click(function () {
    //    debugger;
    //    GetTraceabilityType();
    //    // $("#exampleSmallModal").show();
    //    $('#exampleSmallModal').modal("show");
    //    debugger;
    //});
    //$("#ok").on("click", function () {
    //    var TraceabilityType = $('#TraceabilityType option:selected').attr('id');
    //    var TraceabilityTypeName = $('#TraceabilityType :selected').text();
    //    if (TraceabilityTypeName != "undefined" || TraceabilityTypeName != null) {
    //        CreateCard(TraceabilityType, TraceabilityTypeName);
    //    }
    //    $('#exampleSmallModal').modal("hide");
    //    debugger

    //    // CreateCard();
    //});



    //$("#ok").on("click", function (event) {
    //    debugger;
    //    $('#exampleSmallModal').modal("show");
    //    event.preventDefault();
    //    var TraceabilityType = $('#TraceabilityType option:selected').attr('id');
    //    var TraceabilityTypeName = $('#TraceabilityType :selected').text();
    //    if (TraceabilityType == undefined) {
    //    } else {
    //        // CreateCard(TraceabilityType, TraceabilityTypeName);
    //        NewCare(TraceabilityType, TraceabilityTypeName);
    //        $('#exampleSmallModal').modal("hide");
    //    }

    //});

    //Fabric Details Event Start
    $("#CompositionClose").on("click", function () {
        debugger;
        $('#tbl_FabricVerticallycenteredModal').modal("hide");
    });
    $('#btn_BrandSelect').click(function () {
        $('#tbl_FabricVerticallycenteredModal').modal("show");
    });

    //Fabric Details Event End


    // Yarn Details Event Start


    //Yarn Details Event End

    // radio button
    $('input[name="DetailType"]').change(function () {
        debugger;
        $('#FabricSupplier option').remove();
        $('#FabricType option').remove();
        $('#KindofFabric option').remove();
        $('#CottonInitiative option').remove();
        $('#FabricCurrency option').remove();
        var selectedDetailType = $('input[name="DetailType"]:checked').attr('id');
        switch (selectedDetailType) {
            case 'FabricDetail':
                ShowControll(0);
                GetFabricSupplier();
                GetFabricType();
                GetFabricKind();
                GetYarnType();
                GetAccessoriesCurrency();
                break;
            case 'YarnDetail':
                ShowControll(1);
                //$('#displayData').html('<p>Yarn Detail Data Here</p>');
                break;
            case 'CottonDetail':
                ShowControll(2)
                //$('#displayData').html('<p>Cotton Detail Data Here</p>');
                break;
        }
    });
    $('input[name="DetailType"]:checked').trigger('change');

    // radio button end
    $('#Accessoriesbutton').click(function () {
        debugger;
        GetAccessoriesSupplier();
        GetAccessories();
        GetAccessoriesCurrency();
        $("#AccessoriesLargeModal").modal("show");

    });
    $("#AccessoriesClose").on("click", function () {
        debugger;
        $("#AccessoriesLargeModal").modal("hide");
        $("#OrderNo").val('');
        $("#SourceDate").val('');
        $("#BatchDo").val('');
        $('#AccessoriesSupplier option').remove();
        $('#Accessories option').remove();
        $('#AccessoriesCurrency option').remove();



    });

    $('#Zipperbutton').click(function () {
        debugger;
        GetZipperSupplier();
        GetZipperAccessories();
        GetAccessoriesCurrency();
    });
    TreeCard();
});

function ShowControll(id) {
    if (id == 1) {
        $("#FabricDetailSourceDate").hide();
        $("#FabricDetailBatchDo").hide();
        $("#FabricDetailFabricSupplier").hide();
        $("#FabricDetailFactorySource").hide();
        $("#FabricDetailFactoryNominated").hide();
        $("#FabricDetailNominatedSource").hide();
        $("#FabricDetailFabricCodeSupplier").hide();
        $("#FabricDetailFabricComposition").hide();
        $("#FabricDetailFabricType").hide();
        $("#FabricDetailKindofFabric").hide();
        $("#FabricDetailFabricWeight").hide();
        $("#FabricDetailWeightType").hide();
        $("#FabricDetailCottonInitiative").hide();
        $("#FabricDetailConstruction").hide();
        $("#FabricDetailFabricWidth").hide();
        $("#FabricDetailWeightType1").hide();
        $("#FabricDetailWeightType2").hide();
        $("#FabricDetailQuantity").hide();
        $("#FabricDetailQuantityType").hide();
        $("#FabricDetailYarnCount").hide();
        $("#FabricDetailFabricCurrency").hide();
        $("#FabricDetailFabricPrice").hide();
        $("#FabricDetailFabricPriceType").hide();
        $("#FabricDetailFabricCompositionSelect").hide();
        $("#FabricDetailspace").hide();
        $("#FabricDtailsSave").hide();

        //Cotton Details Controll strat
        $("#CottonDetailSourceDate").hide();
        $("#CottonDetailBatchDo").hide();
        $("#CottonDetailSupplier").hide();
        $("#CottonDetailFactorySource").hide();
        $("#CottonDetailNominatedSource").hide();
        $("#CottonDetailCode").hide();
        $("#CottonDetailMaterial").hide();
        $("#CottonDetailCottonSelect").hide();
        $("#CottonDetailCottonInitiative").hide();
        $("#CottonDetailCottonOrigin").hide();
        $("#CottonDetailQuantity").hide();
        $("#CottonDetailQtyType").hide();
        $("#CottonDetailPrice").hide();
        $("#CottonDetailCurrencyType").hide();
        $("#CottonDetailspace1").hide();
        $("#CottonDetailspace2").hide();
        $("#CottonDetailssave").hide();
        //Cotton Details End

        //  $("#YarnDetailYarnSupplier").hide();
        $("#YarnDetailSourceDate").show();
        $("#YarnDetailBatchDo").show();
        $("#YarnDetailSupplier").show();
        $("#YarnDetailFactorySource").show();
        $("#YarnDetailNominatedSource").show();
        $("#YarnDetailCode").show();
        $("#YarnDetailMaterial").show();
        $("#YarnDetailFabricCompositionSelect").show();
        $("#YarnDetailCottonInitiative").show();
        $("#YarnDetailCount").show();
        $("#YarnDetailQuantity").show();
        $("#YarnDetailQtyType").show();
        $("#YarnDetailPrice").show();
        $("#YarnDetailCurrencyType").show();
        $("#YarnDetailspace1").show();
        $("#YarnDetailspace2").show();
        $("#YarnDetailssave").show();
       
    }
    else if (id == 2) {
        //Fabric Details Strat
        $("#FabricDetailSourceDate").hide();
        $("#FabricDetailBatchDo").hide();
        $("#FabricDetailFabricSupplier").hide();
        $("#FabricDetailFactorySource").hide();
        $("#FabricDetailFactoryNominated").hide();
        $("#FabricDetailNominatedSource").hide();
        $("#FabricDetailFabricCodeSupplier").hide();
        $("#FabricDetailFabricComposition").hide();
        $("#FabricDetailFabricType").hide();
        $("#FabricDetailKindofFabric").hide();
        $("#FabricDetailFabricWeight").hide();
        $("#FabricDetailWeightType").hide();
        $("#FabricDetailCottonInitiative").hide();
        $("#FabricDetailConstruction").hide();
        $("#FabricDetailFabricWidth").hide();
        $("#FabricDetailWeightType1").hide();
        $("#FabricDetailWeightType2").hide();
        $("#FabricDetailQuantity").hide();
        $("#FabricDetailQuantityType").hide();
        $("#FabricDetailYarnCount").hide();
        $("#FabricDetailFabricCurrency").hide();
        $("#FabricDetailFabricPrice").hide();
        $("#FabricDetailFabricPriceType").hide();
        $("#FabricDetailFabricCompositionSelect").hide();
        $("#FabricDetailspace").hide();
        $("#FabricDtailsSave").hide();
        //Fabric Details End

        //Yarn Details strat
        $("#YarnDetailSourceDate").hide();
        $("#YarnDetailBatchDo").hide();
        $("#YarnDetailSupplier").hide();
        $("#YarnDetailFactorySource").hide();
        $("#YarnDetailNominatedSource").hide();
        $("#YarnDetailCode").hide();
        $("#YarnDetailMaterial").hide();
        $("#YarnDetailFabricCompositionSelect").hide();
        $("#YarnDetailCottonInitiative").hide();
        $("#YarnDetailCount").hide();
        $("#YarnDetailQuantity").hide();
        $("#YarnDetailQtyType").hide();
        $("#YarnDetailPrice").hide();
        $("#YarnDetailCurrencyType").hide();
        $("#YarnDetailspace1").hide();
        $("#YarnDetailspace2").hide();
        $("#YarnDetailssave").hide();
        //Yarn Details end

        //Cotton Details Controll strat
        $("#CottonDetailSourceDate").show();
        $("#CottonDetailBatchDo").show();
        $("#CottonDetailSupplier").show();
        $("#CottonDetailFactorySource").show();
        $("#CottonDetailNominatedSource").show();
        $("#CottonDetailCode").show();
        $("#CottonDetailMaterial").show();
        $("#CottonDetailCottonSelect").show();
        $("#CottonDetailCottonInitiative").show();
        $("#CottonDetailCottonOrigin").show();
        $("#CottonDetailQuantity").show();
        $("#CottonDetailQtyType").show();
        $("#CottonDetailPrice").show();
        $("#CottonDetailCurrencyType").show();
        $("#CottonDetailspace1").show();
        $("#CottonDetailspace2").show();
        $("#CottonDetailssave").show();
        //Cotton Details End
    }
    else {
        //Yarn Details strat
        $("#YarnDetailSourceDate").hide();
        $("#YarnDetailBatchDo").hide();
        $("#YarnDetailSupplier").hide();
        $("#YarnDetailFactorySource").hide();
        $("#YarnDetailNominatedSource").hide();
        $("#YarnDetailCode").hide();
        $("#YarnDetailMaterial").hide();
        $("#YarnDetailFabricCompositionSelect").hide();
        $("#YarnDetailCottonInitiative").hide();
        $("#YarnDetailCount").hide();
        $("#YarnDetailQuantity").hide();
        $("#YarnDetailQtyType").hide();
        $("#YarnDetailPrice").hide();
        $("#YarnDetailCurrencyType").hide();
        $("#YarnDetailspace1").hide();
        $("#YarnDetailspace2").hide();
        $("#YarnDetailssave").hide();
        //Yarn Details end

        //Cotton Details Controll strat
        $("#CottonDetailSourceDate").hide();
        $("#CottonDetailBatchDo").hide();
        $("#CottonDetailSupplier").hide();
        $("#CottonDetailFactorySource").hide();
        $("#CottonDetailNominatedSource").hide();
        $("#CottonDetailCode").hide();
        $("#CottonDetailMaterial").hide();
        $("#CottonDetailCottonSelect").hide();
        $("#CottonDetailCottonInitiative").hide();
        $("#CottonDetailCottonOrigin").hide();
        $("#CottonDetailQuantity").hide();
        $("#CottonDetailQtyType").hide();
        $("#CottonDetailPrice").hide();
        $("#CottonDetailCurrencyType").hide();
        $("#CottonDetailspace1").hide();
        $("#CottonDetailspace2").hide();
        $("#CottonDetailssave").hide();
        //Cotton Details End

        //Fabric Details Strat
        $("#FabricDetailSourceDate").show();
        $("#FabricDetailBatchDo").show();
        $("#FabricDetailFabricSupplier").show();
        $("#FabricDetailFactorySource").show();
        $("#FabricDetailFactoryNominated").show();
        $("#FabricDetailNominatedSource").show();
        $("#FabricDetailFabricCodeSupplier").show();
        $("#FabricDetailFabricComposition").show();
        $("#FabricDetailFabricType").show();
        $("#FabricDetailKindofFabric").show();
        $("#FabricDetailFabricWeight").show();
        $("#FabricDetailWeightType").show();
        $("#FabricDetailCottonInitiative").show();
        $("#FabricDetailConstruction").show();
        $("#FabricDetailFabricWidth").show();
        $("#FabricDetailWeightType1").show();
        $("#FabricDetailWeightType2").show();
        $("#FabricDetailQuantity").show();
        $("#FabricDetailQuantityType").show();
        $("#FabricDetailYarnCount").show();
        $("#FabricDetailFabricCurrency").show();
        $("#FabricDetailFabricPrice").show();
        $("#FabricDetailFabricPriceType").show();
        $("#FabricDetailFabricCompositionSelect").show();
        $("#FabricDetailspace").show();
        $("#FabricDtailsSave").show();
        //Fabric Details End

        
    }
}

function GetFabricSupplier() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetFabricSupplier",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var FabricSupplier = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < FabricSupplier.length; i++) {
                var uppercaseVenderName = FabricSupplier[i].VenderName.toUpperCase();
                htmlOptions += '<option id=' + FabricSupplier[i].VenderLibraryID + '>' + uppercaseVenderName + '</option>'
            }
            $('#FabricSupplier option').remove();
            $("#FabricSupplier").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetFabricType() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetFabricType",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var FabricType = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < FabricType.length; i++) {
                var uppercaseFabricTypeName = FabricType[i].FabricType.toUpperCase();
                htmlOptions += '<option id=' + FabricType[i].FabricTypeId + '>' + uppercaseFabricTypeName + '</option>'
            }
            $('#FabricType option').remove();
            $("#FabricType").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetFabricKind() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetFabricKind",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var FabricKind = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < FabricKind.length; i++) {
                var uppercaseFabricKindName = FabricKind[i].FabricKindName.toUpperCase();
                htmlOptions += '<option id=' + FabricKind[i].FabricKindId + '>' + uppercaseFabricKindName + '</option>'
            }
            $('#KindofFabric option').remove();
            $("#KindofFabric").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetYarnType() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetYarnType",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var YarnType = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < YarnType.length; i++) {
                var uppercaseYarnTypeName = YarnType[i].YarnTypeName.toUpperCase();
                htmlOptions += '<option id=' + YarnType[i].YarnTypeId + '>' + uppercaseYarnTypeName + '</option>'
            }
            $('#CottonInitiative option').remove();
            $("#CottonInitiative").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetAccessoriesSupplier() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetAccessoriesSupplier",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var AccessoriesSupplier = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < AccessoriesSupplier.length; i++) {
                var uppercaseAccessoriesSupplierName = AccessoriesSupplier[i].VenderName.toUpperCase();
                htmlOptions += '<option id=' + AccessoriesSupplier[i].VenderLibraryID + '>' + uppercaseAccessoriesSupplierName + '</option>'
            }
            $('#AccessoriesSupplier option').remove();
            $("#AccessoriesSupplier").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetAccessories() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetAccessories",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var Accessories = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < Accessories.length; i++) {
                var uppercaseAccessoriesName = Accessories[i].Name.toUpperCase();
                htmlOptions += '<option id=' + Accessories[i].VVIID + '>' + uppercaseAccessoriesName + '</option>'
            }
            $('#Accessories option').remove();
            $("#Accessories").append(htmlOptions);
            $('#ZipperAccessories option').remove();
            $("#ZipperAccessories").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetAccessoriesCurrency() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetAccessoriesCurrency",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var Currency = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < Currency.length; i++) {
                var uppercaseAccessoriesCurrencyName = Currency[i].CurrencyName.toUpperCase();
                htmlOptions += '<option id=' + Currency[i].CurrencyID + '>' + uppercaseAccessoriesCurrencyName + '</option>'
            }
            $('#AccessoriesCurrency option').remove();
            $("#AccessoriesCurrency").append(htmlOptions);
            $('#FabricCurrency option').remove();
            $('#FabricCurrency').append(htmlOptions);
            $('#ZipperCurrency option').remove();
            $('#ZipperCurrency').append(htmlOptions);

        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetZipperSupplier() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetZipperSupplier",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var ZipperSupplier = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < ZipperSupplier.length; i++) {
                var uppercaseZipperVenderName = ZipperSupplier[i].VenderName.toUpperCase();
                htmlOptions += '<option id=' + ZipperSupplier[i].VenderLibraryID + '>' + uppercaseZipperVenderName + '</option>'
            }
            $('#ZipperSupplier option').remove();
            $("#ZipperSupplier").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}
function GetZipperAccessories() {
    debugger;
    $.ajax({
        type: "GET",
        url: "/Traceability/GetZipperAccessories",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var Accessories = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < Accessories.length; i++) {
                var uppercaseAccessoriesName = Accessories[i].Name.toUpperCase();
                htmlOptions += '<option id=' + Accessories[i].VVIID + '>' + uppercaseAccessoriesName + '</option>'
            }
            $('#ZipperAccessories option').remove();
            $("#ZipperAccessories").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}




// Tree start
// Sample data (replace with your actual data)

function createCard(data) {
    debugger;
    var cardHtml = `
            
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                        <p class="card-text">${data.description}</p>
                        <a href="#" class="btn btn-primary">View Details</a>
                    </div>
                </div>
          
        `;
    return cardHtml;
}

function TreeCard() {
    var dashboardData = [
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' },
        { title: 'Builds', description: 'View and manage builds.' }
        // Add more data as needed
    ];
    debugger;
    var cardContainer = $('#cardContainer');

    for (var i = 0; i < dashboardData.length; i++) {
        var cardData = dashboardData[i];
        var cardHtml = createCard(cardData);
        cardContainer.append(cardHtml);
    }
};
//$(document).ready(function () {
   
//});
//tree end

