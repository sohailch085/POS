using DataBaseLayer;
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
        public JsonResult GetCities()
        {
            var GeographicalTerritory = GetAllDropDownFill.Get_DropdownValues("Cities");
            return Json(GeographicalTerritory);
        }
        public JsonResult GetCountries()
        {
            var GeographicalTerritory = GetAllDropDownFill.Get_DropdownValues("Countries");
            return Json(GeographicalTerritory);
        } 
        public JsonResult GetSupplierType()
        {
            DBConnection db=new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetSupplierType()));
        }
        public JsonResult GetVenderVerticalIntegration()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetVenderVerticalIntegration()));
        }
        public JsonResult GetFabricProcess()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetFabricProcess()));
        }
    }
}
