using DataBaseLayer;
using Microsoft.AspNetCore.Mvc;

namespace POS.Controllers
{
    public class ApprovalController : Controller
    {
        public IActionResult ApprovalIndex()
        {
            var Email = HttpContext.Session.GetString("Email");
            var UserID = HttpContext.Session.GetString("UserID");
            if (Email != null && UserID != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Login", "Login");
            }            
        }
        [HttpGet]
        public JsonResult GetApprovalRequest()
        {
            DBConnection db = new DBConnection();
            var LoadCustomer = GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetApprovalRequest());
            return Json(LoadCustomer);
        }
    }
}
