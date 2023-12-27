﻿using DataBaseLayer;
using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            var Email = HttpContext.Session.GetString("Email");
            var UserID = HttpContext.Session.GetString("UserID");
            if (Email != null && UserID != null)
            {
                return View();
                //return RedirectToAction("Index", "Home");
            }
            else
            {
                return RedirectToAction("Login", "Login");
            }
          //  return View();
        }

      
    }
}
