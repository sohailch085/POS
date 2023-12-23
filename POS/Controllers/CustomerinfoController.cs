using Microsoft.AspNetCore.Mvc;
using DataBaseLayer;
using Common;
using Microsoft.AspNetCore.Mvc.Controllers;

namespace POS.Controllers
{
    public class CustomerinfoController : Controller
    {

        public IActionResult CustomerInfoIndex()
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
            // View(); 
        }
        public IActionResult CustomerDetails()
        {
            var Email = HttpContext.Session.GetString("Email");
            var UserID = HttpContext.Session.GetString("UserID");
            if (Email != null && UserID != null)
            {
                return View();//RedirectToAction("CustomerDetails", "Customerinfo");
            }
            else
            {
                return RedirectToAction("Login", "Login");
            }
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
        public JsonResult GetCountries()
        {
            var GeographicalTerritory = GetAllDropDownFill.Get_DropdownValues("Countries");
            return Json(GeographicalTerritory);
        }
        public JsonResult GetContactType()
        {
            var GeographicalTerritory = GetAllDropDownFill.Get_DropdownValues("ContactType");
            return Json(GeographicalTerritory);
        }
        public JsonResult GetCities()
        {
            var GeographicalTerritory = GetAllDropDownFill.Get_DropdownValues("Cities");
            return Json(GeographicalTerritory);
        }
        public JsonResult LoadCusotmerInfo()
        {
            DBConnection db = new DBConnection();
            var LoadCustomer = GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetCustomerInfo());
            return Json(LoadCustomer);
        }
        public JsonResult GetFilterData(string Id)
        {
            DBConnection db = new DBConnection();
            return Json(GetAllDropDownFill.DataTableToJSONWithJSONNet(db.GetFilterData(Id)));
        }
        [HttpPost]
        public IActionResult CustomerDetailsSave([FromBody] CustomerInfoModel model)
        {
            if (model == null || model.lstCustomrInfo.Count < 0 || model.lstCustomrInfo == null)
                return Json("404");
            DBConnection dBConnection = new DBConnection();
            CustomerInfo customerInfo = new CustomerInfo();
            foreach (var item in model.lstCustomrInfo)
            {
                customerInfo.CustomerID = item.CustomerID;
                customerInfo.CustomerTypeID = item.CustomerTypeID;
                customerInfo.CustomerTypeName = item.CustomerTypeName.ToUpper();
                customerInfo.ParentGroupID = item.ParentGroupID;
                customerInfo.ParentGroupName = item.ParentGroupName;
                customerInfo.GeographicalTerritoryID = item.GeographicalTerritoryID;
                customerInfo.GeographicalTerritoryName = item.GeographicalTerritoryName.ToUpper();
                customerInfo.CustomerName = item.Name.ToUpper();
                customerInfo.ShortName = item.ShortName.ToUpper();
                customerInfo.CountryID = item.CountryID;
                customerInfo.CountryName = item.CountryName.ToUpper();
                customerInfo.CityID = item.CityID;
                customerInfo.CityName = item.CityName.ToUpper();
                customerInfo.WebAddress = item.WebAddress.ToUpper();
                customerInfo.PhoneLandLine = item.PhoneLandLine;
                customerInfo.Fax = item.Fax;
                customerInfo.PreferredContactMethod = item.PreferredContactMethod.ToUpper();
                customerInfo.Retail = item.Retail;
                customerInfo.WholeSale = item.WholeSale;
                customerInfo.WareHouse = item.WareHouse;
                customerInfo.Importer = item.Importer;
                customerInfo.ContactTypeID = item.ContactTypeID;
                customerInfo.ContactTypeName = item.ContactTypeName.ToUpper();
                customerInfo.Department = item.Department.ToUpper();
                customerInfo.Name = item.Name.ToUpper();
                customerInfo.JobTitle = item.JobTitle.ToUpper();
                customerInfo.MobileNo = item.MobileNo;
                customerInfo.Email = item.Email;
                customerInfo.DocumentFile = new byte[0];
                if (item.CustomerID == 0)
                {
                    customerInfo.CreatedByID = Convert.ToInt32(HttpContext.Session.GetString("UserID"));
                    customerInfo.CreatedByDateTime = DateTime.Now;
                    customerInfo.UpdatedByID = Convert.ToInt32(null);
                    customerInfo.UpdatedByDateTime = Convert.ToDateTime(null);
                }
                else if (item.CustomerID > 0)
                {
                    customerInfo.UpdatedByID = Convert.ToInt32(HttpContext.Session.GetString("UserID"));
                    customerInfo.UpdatedByDateTime = DateTime.Now;
                    customerInfo.CreatedByID = Convert.ToInt32(null);
                    customerInfo.CreatedByDateTime = Convert.ToDateTime(null);
                }
                else
                {
                    customerInfo.CreatedByID = Convert.ToInt32(null);
                    customerInfo.CreatedByDateTime = Convert.ToDateTime(null);
                }


            }
             dBConnection.AddCustomerDetailsSave(customerInfo);
            return Json("");
        }

    }
}
