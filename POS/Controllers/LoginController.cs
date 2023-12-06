using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using CommonLayer;
using Microsoft.AspNetCore.Http.Metadata;

namespace POS.Controllers
{
    //[ApiController]
    //[Route("api/[controller]")]
    //[Route("Login")]
    public class LoginController : Controller
    {
        
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult CompanySignUp()
        { 
            return View();
        }
        //  [Route ("CompanySignUp")]
        [HttpPost("CompanySignUpSave")]
        public IActionResult CompanySignUpSave([FromBody] CompanysignupModel model)
        {
            if(model.lstcompanySignups == null)
                return Json("404");
            DBConnection dBConnection = new DBConnection();
            CompanySignup companySignup = new CompanySignup();
            foreach (var item in model.lstcompanySignups)
            {
                companySignup.CompanyName = item.CompanyName;
                companySignup.Country = item.Country;
                companySignup.FirstName = item.FirstName;
                companySignup.LastName = item.LastName;
                companySignup.ContactEmail = item.ContactEmail;
                companySignup.ContactPhone = item.ContactPhone;
                companySignup.WebSite = item.WebSite;
                companySignup.PreferredContactMethod = item.PreferredContactMethod;
                companySignup.Address = item.Address;
                companySignup.BusinessDescription = item.BusinessDescription;
            }
            dBConnection.AddCompanySignup(companySignup);
            return Json(""); 
        }
    }
}
