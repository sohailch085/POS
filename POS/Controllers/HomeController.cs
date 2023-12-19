using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
