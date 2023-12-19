﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Common;
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
            return View();
        }
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
        //[HttpPost]
        //public JsonResult LoginVerify([FromForm] UserLoginModel model)
        //{
        //    if (model == null || model.lstLogin == null || model.lstLogin.Count < 0)
        //        return Json("404");
        //    DBConnection dbConnection = new DBConnection();
        //    Users users = new Users();
        //    foreach (var item in model.lstLogin) 
        //    {
        //        users.Email = item.Email;
        //        users.PasswordHash = item.PasswordHash;
        //    }
        //    var response=GetAllDropDownFill.DataTableToJSONWithJSONNet(dbConnection.VerifyLogin(users));
        //    return Json(response);
        //}
        [HttpPost]
        public JsonResult LoginVerify( string Email, string Password)
        {
            if (Email == null || Password == null)
                return Json("404");

            var responseList = new List<object>();
            DBConnection dbConnection = new DBConnection();
            DataTable dt = new DataTable();
            dt = dbConnection.VerifyLogin(Email.ToString(), Password.ToString());
            if (Email == dt.Rows[0]["Email"].ToString() && Password == dt.Rows[0]["PasswordHash"].ToString())
            {
                 return Json("true");
            }
            //var response = GetAllDropDownFill.DataTableToJSONWithJSONNet();
            //responseList.Add(response);

            return Json("");
        }

    }
}
