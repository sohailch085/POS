$(document).ready(function () {
    debugger
    $("#Register").click(function () {
        
        debugger;
        var Companysignuplist = [];
        var Companysignuparry = {};

        var CompanyName = $("#CompanyName").val();
        var Country = $("#Country").val();
        var FirstName = $("#FirstName").val();
        var LastName = $("#LastName").val();
        var Email = $("#ContactEmail").val();
        var Phone = $("#ContactPhone").val();
        var website = $("#WebSite").val();
        var PreferredContact = $("#PreferredContactMethod").val();
        var Address = $("#Address").val();
        var BusinessDescription = $("#BusinessDescription").val();

        Companysignuparry = {
            CompanyName: CompanyName,
            Country: Country,
            FirstName: FirstName,
            LastName: LastName,
            ContactEmail: Email,
            ContactPhone: Phone,
            WebSite: website,
            PreferredContactMethod: PreferredContact,
            Address: Address,
            BusinessDescription: BusinessDescription,
        };

        Companysignuplist.push(Companysignuparry);
        var apiEndpoint = 'Login/CompanySignUpSave';

        $.ajax({
            type: 'POST',
            url: apiEndpoint,
            contentType: 'application/json',
            data: JSON.stringify({ lstcompanySignups: Companysignuplist }),
            async: false,
            success: function (response) {
                
                console.log(response);
            },
            error: function (error) {
               
                console.error('Error submitting company signup:', error);
            }
        });

    });
});