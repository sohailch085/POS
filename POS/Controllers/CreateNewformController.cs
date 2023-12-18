using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class CreateNewformController : Controller
    {
        public IActionResult CreateNewformIndex()
        {
            return View();
        }
    }
}
