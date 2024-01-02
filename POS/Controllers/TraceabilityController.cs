using DataBaseLayer;
using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class TraceabilityController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public JsonResult GetFabricSupplier()
        {
            DBConnection db = new DBConnection();
            //db.GetTraceabilityType()
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetFabricSupplier()));
        }  
        public JsonResult GetFabricType()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetFabricType()));
        }  
        public JsonResult GetFabricKind()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetFabricKind()));
        } 
        public JsonResult GetYarnType()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetYarnType()));
        } 
        public JsonResult GetAccessoriesSupplier()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetAccessoriesSupplier()));
        } 
        public JsonResult GetAccessories()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetAccessories()));
        } 
        public JsonResult GetAccessoriesCurrency()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetAccessoriesCurrency()));
        } 
        public JsonResult GetZipperSupplier()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetZipperSupplier()));
        }
        public JsonResult GetZipperAccessories()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetZipperAccessories()));
        } 
        public JsonResult GetTraceabilityCard()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetTraceabilityCard()));
        } 
        public JsonResult GetTraceabilityType()
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetTraceabilityType()));
        }
       
    }
}
