using Microsoft.AspNetCore.Mvc;

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
    }
}
