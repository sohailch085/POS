$(document).ready(function () {
    TreeCard();
   
    $("#ok").on("click", function () {
        debugger;
         var TraceabilityType = $('#TraceabilityType option:selected').attr('id');
        var TraceabilityTypeName = $('#TraceabilityType :selected').text();
        if (TraceabilityTypeName != "undefined" || TraceabilityTypeName != null) {
            switch (TraceabilityType) {
                case "1":
                    debugger;
                    $('#FabricYarnLargeModal').modal('show');
                    break;
                case "2":
                    debugger;
                    GetAccessoriesSupplier();
                    GetAccessories();
                    GetAccessoriesCurrency();
                    $('#AccessoriesLargeModal').modal('show');
                    break;
                case "3":
                    GetZipperSupplier();
                    GetZipperAccessories();
                    GetAccessoriesCurrency();
                    $('#ZipperLargeModal').modal('show');
                    break;
                case "4":
                    $('#PackagingLargeModal').modal('show');
                    break;
                default:
                    break;

            }
        }
        $('#exampleSmallModal').modal("hide");
        debugger
    });
    $('input[name="DetailType"]:selected').trigger('change');

    $("#AddCard").click(function () {
        debugger;
        GetTraceabilityType();
        $("#exampleSmallModal").modal("show");
    });

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
                break;
            case 'CottonDetail':
                ShowControll(2)
                break;
        }
    });
    $('input[name="DetailType"]:checked').trigger('change');
    
    $('#Accessoriesbutton').click(function () {
        debugger;
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
       
    });
    
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

function GetTraceabilityType() {
    $("#TraceabilityType").html('');
    $.ajax({
        type: "GET",
        url: "/Traceability/GetTraceabilityType",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var Traceability = JSON.parse(response);
            var htmlOptions = '<option>--Select--</option>'
            debugger;
            for (var i = 0; i < Traceability.length; i++) {
                var uppercaseTraceability = Traceability[i].Name.toUpperCase();
                htmlOptions += '<option id=' + Traceability[i].ID + '>' + uppercaseTraceability + '</option>'
            }
            $("#TraceabilityType").append(htmlOptions);
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
}

// dynamic Create Card Tree start 
function createCard(data, counter, avilabecontrol) {
    debugger;
    if (counter == avilabecontrol) {
        var cardHtml = `
                <div class="card border-top border-0 border-4 border-dark">
                    <div class="card-body">
                     <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold"></label>
                         <div class="col-sm-12">
                            <label class="col-sm-12 col-form-label fw-bold" style="width: 100%">${data.VenderName}</label>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold">Batch# :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.BatchDONo}</label>
                        </div>
                      </div>
                       <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold"> Date   :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.SourceDate}</label>
                        </div>
                      </div>                      
                       <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold"> Type   :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.FabricType}</label>
                        </div>
                      </div>
                       <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold"> Kind   :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.FabricKindName}</label>
                        </div>
                      </div>
                      <div class="row" style="float: right;margin-top: -246px;margin-right: -54px;">
						<label class="col-sm-3 col-form-label"></label>
						<div class="col-sm-9" id="button-${counter}">							
                             <svg id="plusIcon-${counter}" xmlns = "http://www.w3.org/2000/ svg" width = "16" height = "16" fill =                                "currentColor" class="bi bi-plus-circle" viewBox = "0 0 16 16" style="margin-top:91px;"> 
                                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1                           0-1h3v-3A.5.5 0 0 1 8 4" />
                             </svg>
						</div>
					 </div>                     
                    </div>
                </div>
        `;        
        $(document).on('click', `#plusIcon-${counter}`, function () {
            debugger;

            GetTraceabilityType();
            $('#exampleSmallModal').modal('show');
        });
    } else {
        var url = window.location.href;
        var cardHtml = `            
                <div class="card border-top border-0 border-4 border-dark">
                    <div class="card-body">
                     <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold"></label>
                         <div class="col-sm-12">
                            <label class="col-sm-12 col-form-label fw-bold" style="width: 100%">${data.VenderName}</label>
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold">Batch# :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.BatchDONo}</label>
                        </div>
                      </div>
                       <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold">Date :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.SourceDate}</label>
                        </div>
                      </div>                      
                       <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold">Type :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.FabricType}</label>
                        </div>
                      </div>
                       <div class="row mb-3">
                        <label class="col-sm-6 col-form-label fw-bold">Kind :</label>
                         <div class="col-sm-6">
                            <label class="col-sm-6 col-form-label" style="margin-left: -102px;width: 100px">${data.FabricKindName}</label>
                        </div>
                      </div>
                      <div class="row" style="float: right;margin-top: -246px;margin-right: -54px;">
						<label class="col-sm-3 col-form-label"></label>
						<div class="col-sm-9" id="button-${counter}">							
                             <svg id="plusIcon-${counter}" name=${data.ID} xmlns = "http://www.w3.org/2000/ svg" width = "16" height = "16" fill =                                "currentColor" class="bi bi-plus-circle" viewBox = "0 0 16 16" style="margin-top:91px;"> 
                                 <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                 <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1                           0-1h3v-3A.5.5 0 0 1 8 4" />
                             </svg>
						</div>
					 </div>
                      <div class="row" style="float: right;margin-top: -246px;margin-right: -54px;">
						<label class="col-sm-3 col-form-label"></label>
						<div class="col-sm-9">							
                           <img src="${url}/assets/CustomizeIcon/arrow.png" alt="Girl in a jacket" style="width: 66px;height: 42px; margin-left: 125px;margin-top: 111px;">
						</div>
					 </div>
                    </div>
                </div>
        `;
        $(document).on('click', `#plusIcon-${counter}`, function () {
            debugger;
            // Get the id attribute value using .attr('id')
            var id = $(`#plusIcon-${counter}`).attr('name');
            debugger
            // Split the id using the '-' character
            var parts = id.split('-');

            // Extract the counter value (assuming it's the second part)
            var counter = parts[1];

            console.log(counter); // This will output the value after 'plusIcon-'

            GetTraceabilityType();
            $('#exampleSmallModal').modal('show');
        });
    }
   
    return cardHtml;
}
function TreeCard() {
    debugger;
    var dashboardData = [];
    $.ajax({
        type: "GET",
        url: "/Traceability/GetTraceabilityCard",
        contentType: "application/json",
        async: false,
        success: function (response) {
            debugger;
            console.log(response);
            var TraceabilityCard = JSON.parse(response);
            dashboardData = TraceabilityCard;
            var cardContainer = $('#cardContainer');
            var avilabecontrol = dashboardData.length-1;
            for (var i = 0; i < dashboardData.length; i++) {
                var cardData = dashboardData[i];
                var cardHtml = createCard(cardData, i, avilabecontrol);
                cardContainer.append(cardHtml);
            }
        },
        error: function (error) {
            console.error("Error getting parent group:", error);
        }
    });
};
// dynamic Create Card Tree End 
