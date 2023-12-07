using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using CommonLayer;
using Microsoft.AspNetCore.Http.Metadata;

namespace POS.Controllers
{
    public class LoginController : Controller
    {

        public IActionResult CompanySignUp()
        {
            return View();
        }
        [HttpPost]
        public JsonResult CompanySignUpSave([FromBody] CompanysignupModel model)
        {
            if (model.lstcompanySignups == null || model == null || model.lstcompanySignups.Count < 0)
                return Json("404");
            DBConnection dBConnection = new DBConnection();
            CompanySignup companySignup = new CompanySignup();
            foreach (var item in model.lstcompanySignups)
            {
                companySignup.CompanyName = item.CompanyName.ToUpper();
                companySignup.Country = item.Country.ToUpper();
                companySignup.FirstName = item.FirstName.ToUpper();
                companySignup.LastName = item.LastName.ToUpper();
                companySignup.ContactEmail = item.ContactEmail;
                companySignup.ContactPhone = item.ContactPhone;
                companySignup.WebSite = item.WebSite.ToUpper();
                companySignup.PreferredContactMethod = item.PreferredContactMethod.ToUpper();
                companySignup.Address = item.Address.ToUpper();
                companySignup.BusinessDescription = item.BusinessDescription.ToUpper();
            }
            dBConnection.AddCompanySignup(companySignup);
            return Json("");
        }
    }
}
