using Microsoft.AspNetCore.Mvc;
using DataBaseLayer;

namespace POS.Controllers
{
    public class CustomerinfoController : Controller
    {
        public IActionResult CustomerInfoIndex()
        {
            return View(); 
        }
        public IActionResult CustomerDetails()
        {
            return View();
        }
        public JsonResult GetCustomerType()
        {
            var CustomerType = GetAllDropDownFill.Get_DropdownValues("CustomerType");
            return Json(CustomerType);
        }
        [HttpGet]
        public JsonResult GetParentGroup()
        {
            var ParentGroup = GetAllDropDownFill.Get_DropdownValues("ParentGroup");
            return Json(ParentGroup);
        }
        [HttpGet]
        public JsonResult GetGeographicalTerritory()
        {
            var GeographicalTerritory = GetAllDropDownFill.Get_DropdownValues("GeographicalTerritory");
            return Json(GeographicalTerritory);
        }




    }
}
