$(document).ready(function () {

    //CreateCard("", "");
    NewCare("", "");

    $("#CreateCard").click(function () {
        debugger;
        GetTraceabilityType();
        // $("#exampleSmallModal").show();
        $('#exampleSmallModal').modal("show");
        debugger;
    });
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



    $("#ok").on("click", function (event) {
        debugger;
        $('#exampleSmallModal').modal("show");
        event.preventDefault();
        var TraceabilityType = $('#TraceabilityType option:selected').attr('id');
        var TraceabilityTypeName = $('#TraceabilityType :selected').text();
        if (TraceabilityType == undefined) {
        } else {
            // CreateCard(TraceabilityType, TraceabilityTypeName);
            NewCare(TraceabilityType, TraceabilityTypeName);
            $('#exampleSmallModal').modal("hide");
        }

    });

    $("#CompositionClose").on("click", function () {
        debugger;
        $('#exampleVerticallycenteredModal').modal("hide");
    });




});

function NewCare(TraceabilityType, TraceabilityTypeName) {
    var html = '';
    if (TraceabilityType == "" || TraceabilityTypeName == "") {
        html =
            //'<div class="col" id = "leftDiv">' +
            //'<div class="col">' +
            //'       <label id=' + TraceabilityType + '>' + TraceabilityTypeName + '</label>' +
            //'       <div class="card radius-10" style="height:30vh;width: 50%;">' +
            //'           <div class="card-body">' +
            '               <div class=" align-items-center">' +
            '                    <div>' +
            '                      <button type="button" id = "CreateCard" onclick="CreateCard("","")" class="btn btn-success-cart" data-id=' + TraceabilityType + '> ' +
            '                             <svg xmlns = "http://www.w3.org/2000/ svg" width = "16" height = "16" fill =                                "currentColor" class="bi bi-plus-circle" viewBox = "0 0 16 16" style = "margin-                                                 left:185px;margin-top: 50%" > ' +
            '                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />' +
            '                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1                                           0-1h3v-3A.5.5 0 0 1 8 4" />' +
            '                           </svg>' +
            '                      </button > ' +
            //'                    </div> ' +

            //'               </div> ' +

            //'           </div>' +
            //'       </div>' +
            '</div> '+
            '</div > ';
            
          

        $("#Newdiv").append(html);
    } else {        
        html = '<div class="col" id="rightDiv" style="margin-left: 10px;">' +
            '<div class="col">' +
            '       <label id=' + TraceabilityType + '>' + TraceabilityTypeName + '</label>' +
            '       <div class="card radius-10" style="height:30vh;width: 50%;">' +
            '           <div class="card-body">' +
            '               <div class="d-flex align-items-center">' +
            '                    <div>' +
            '                      <button type="button" id = "CreateCard" onclick="CreateCard("","")" class="btn btn-success-cart" data-id=' + TraceabilityType + '> ' +
            '                             <svg xmlns = "http://www.w3.org/2000/ svg" width = "16" height = "16" fill =                                "currentColor" class="bi bi-plus-circle" viewBox = "0 0 16 16" style = "margin-                                                 left:185px;margin-top: 50%" > ' +
            '                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />' +
            '                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1                                           0-1h3v-3A.5.5 0 0 1 8 4" />' +
            '                           </svg>' +
            '                      </button > ' +
            '                    </div> ' +

            '               </div> ' +

            '           </div>' +
            '       </div>' +
            '</div> '+
            '</div> ';
      
        $("#Newdiv").append(html);
    }
}


function CreateCard(TraceabilityType, TraceabilityTypeName) {
    debugger;
    var html = '';
    if (TraceabilityType == "" || TraceabilityTypeName == "") {
        html = '<div class="col">' +
            '       <label id=' + TraceabilityType + '>' + TraceabilityTypeName + '</label>' +
            '       <div class="card radius-10"  style="height:30vh">' +
            '           <div class="card-body">' +
            '               <div class="d-flex align-items-center">' +
            '                    <div>' +
            '                     <button type="button" class="btn btn-success-cart" data-id=' + TraceabilityType + '> ' +
            '                             <svg xmlns = "http://www.w3.org/2000/ svg" id = "CreateCard" width = "16" height = "16" fill =                                "currentColor" class="bi bi-plus-circle" viewBox = "0 0 16 16" style = "margin-                                                 left:185px;margin-top: 50%" > ' +
            '                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />' +
            '                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1                                           0-1h3v-3A.5.5 0 0 1 8 4" />' +
            '                           </svg>' +
            '                    </button > ' +
            '                    </div> ' +

            '               </div> ' +

            '           </div>' +
            '       </div>' +
            '</div> ';

        $("#CardBinding").append(html);

    } else {

        html = '<div class="col">' +
            '       <label id=' + TraceabilityType + '>' + TraceabilityTypeName + '</label>' +
            '       <div class="card radius-10" style="height:30vh">' +
            '           <div class="card-body">' +
            '               <div class="d-flex align-items-center">' +
            '                    <div>' +
            '                      <button type="button" id = "CreateCard" onclick="CreateCard("","")" class="btn btn-success-cart" data-id=' + TraceabilityType + '> ' +
            '                             <svg xmlns = "http://www.w3.org/2000/ svg" width = "16" height = "16" fill =                                "currentColor" class="bi bi-plus-circle" viewBox = "0 0 16 16" style = "margin-                                                 left:185px;margin-top: 50%" > ' +
            '                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />' +
            '                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1                                           0-1h3v-3A.5.5 0 0 1 8 4" />' +
            '                           </svg>' +
            '                      </button > ' +
            '                    </div> ' +

            '               </div> ' +

            '           </div>' +
            '       </div>' +
            '</div> ';
        $("#CardBinding").append(html);
    }
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



function populateLeftDiv() {
    var leftDiv = $('#leftDiv');

    // Create and append three dynamic divs
    for (var i = 1; i <= 3; i++) {
        var dynamicDiv = $('<div class="dynamic-div"></div>');
        dynamicDiv.html(createDynamicContent(i));
        leftDiv.append(dynamicDiv);
    }
}

function populateRightDiv() {
    var rightDiv = $('#rightDiv');

    // Create and append three dynamic divs
    for (var i = 4; i <= 6; i++) {
        var dynamicDiv = $('<div class="dynamic-div"></div>');
        dynamicDiv.html(createDynamicContent(i));
        rightDiv.append(dynamicDiv);
    }
}