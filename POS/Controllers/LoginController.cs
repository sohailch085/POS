using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Common;
//using System.Web.Mvc;
using System.Net.Http;
using Microsoft.AspNetCore.Http.Metadata;
using DataBaseLayer;
using System.Data;

namespace POS.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Login()
        {
            var Email = HttpContext.Session.GetString("Email");
            var UserID = HttpContext.Session.GetString("UserID");
            if (Email != null && UserID != null)
            {
                // return View();
                return RedirectToAction("Index", "Home");
            }
            else {
                return View();
            }
        }
        public IActionResult CompanySignUp()
        {
            return View();
        }
        [HttpPost]
        public JsonResult CompanySignUpSave([FromBody] CompanysignupModel model)
        {
            if (model == null|| model.lstcompanySignups.Count == 0||model.lstcompanySignups == null  )
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
        [HttpPost]
        public JsonResult LoginVerify([FromBody] UserLoginModel model)
        {
            if (model == null || model.lstLogin.Count == 0 || model.lstLogin== null)
                return Json("404");

            DBConnection dbConnection = new DBConnection();
            Users u = new Users();
            foreach (var item in model.lstLogin)
            {
                u.UserName = item.Email;
                u.PasswordHash = item.PasswordHash;
                DataTable dt = new DataTable();
                dt = dbConnection.VerifyLogin(u.UserName, u.PasswordHash);
                if (u.UserName == dt.Rows[0]["Email"].ToString() && u.PasswordHash == dt.Rows[0]["PasswordHash"].ToString())
                {
                    HttpContext.Session.SetString("Email", dt.Rows[0]["Email"].ToString() );
                    HttpContext.Session.SetString("UserID", dt.Rows[0]["UserId"].ToString());
                    return Json("success");
                }
            }
            return Json("");
        }

    }
}
