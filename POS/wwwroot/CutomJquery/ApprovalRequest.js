
$(document).ready(function () {
  
    ApprovalRequestLoad();
   
});
function ApprovalRequestLoad() {
    debugger;
    $.ajax({
        url: "/Approval/GetApprovalRequest",
        method: "GET",
        contentType: "application/json",
        success: function (response) {
            var ApprovalRequest = JSON.parse(response);
            $("#tbApprovalRequest tbody").empty();
            
            for (var i = 0; i < ApprovalRequest.length; i++) {
                var CompanyName = ApprovalRequest[i].CompanyName || '';
                var Country = ApprovalRequest[i].Country || '';
                var FirstName = ApprovalRequest[i].FirstName || '';
                var LastName = ApprovalRequest[i].LastName || '';
                var ContactEmail = ApprovalRequest[i].ContactEmail || '';
                var ContactPhone = ApprovalRequest[i].ContactPhone || '';
                var Website = ApprovalRequest[i].Website || '';
                var PreferredContactMethod = ApprovalRequest[i].PreferredContactMethod || '';
                var Address = ApprovalRequest[i].Address || '';
                var BusinessDescription = ApprovalRequest[i].BusinessDescription || '';
                var SignupID = ApprovalRequest[i].SignupID || '';
                var requestDate = new Date(ApprovalRequest[i].RequestDate);
                var options = { year: 'numeric', month: 'long', day: 'numeric' };
                var formattedDate = requestDate.toLocaleDateString(undefined, options);

                var html =
                    '<tr>' +
                    '<td>' + CompanyName + '</td>' +
                    '<td>' + Country + '</td>' +
                    '<td>' + FirstName + '</td>' +
                    '<td>' + LastName + '</td>' +
                    '<td>' + ContactEmail + '</td>' +
                    '<td>' + ContactPhone + '</td>' +
                    '<td>' + Website + '</td>' +
                    '<td>' + PreferredContactMethod + '</td>' +
                    '<td>' + Address + '</td>' +
                    '<td>' + BusinessDescription + '</td>' +
                    '<td>' + formattedDate + '</td>' +
                    '<td><input type="checkbox" id=' + SignupID +' /></td>' +
                    '</tr>';

                $("#tbApprovalRequest tbody").append(html);
            }
        },
        error: function (error) {
            console.error("Error fetching approval requests:", error);
        }
    });
}

