using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class CustomerinfoController : Controller
    {
        public IActionResult CustomerInfoIndex()
        {
            return View();
        }
    }
}
