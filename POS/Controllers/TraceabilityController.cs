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
        public JsonResult GetTraceabilityType()
        {
            DBConnection db=new DBConnection();            
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetTraceabilityType()));
        }
    }
}
