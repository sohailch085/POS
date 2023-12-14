using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class SupplierInfoController : Controller
    {
        public IActionResult SupplierInfoIndex()
        {
            return View();
        }
        public IActionResult SupplierDetails()
        {
            return View();
        }
    }
}
