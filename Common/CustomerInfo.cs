using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public class CustomerInfo
    {
        public long CustomerID { get; set; } = 0;
        public string CustomerName { get; set; } = "";
        public string ShortName { get; set; } = "";
        public int CustomerTypeID { get; set; }
        public string CustomerTypeName { get; set; } = "";
        public int ParentGroupID { get; set; }
        public string ParentGroupName { get; set; } = "";
        public int GeographicalTerritoryID { get; set; }
        public string GeographicalTerritoryName { get; set; } = "";
        public int CountryID { get; set; }
        public string CountryName { get; set; } = "";
        public int CityID { get; set; }
        public string CityName { get; set; } = "";
        public string WebAddress { get; set; } = "";
        public string PhoneLandLine { get; set; } = "";
        public string Fax { get; set; } = "";
        public string PreferredContactMethod { get; set; } = "";
        public bool Retail { get; set; } = false;
        public bool WholeSale { get; set; }=false;
        public bool WareHouse { get; set; } = false;
        public bool Importer { get; set; } = false;
        public string ContactTypeID { get; set; } = "";
        public string ContactTypeName { get; set; } = "";
        public string Department { get; set; } = "";
        public string Name { get; set; } = "";
        public string JobTitle { get; set; } = "";
        public string MobileNo { get; set; } = "";
        public string Email { get; set; } = "";
        public byte[] DocumentFile { get; set; } = new byte[0];
        public int CreatedByID { get; set; }
        public DateTime CreatedByDateTime { get; set; }
        public int UpdatedByID { get; set; }
        public DateTime UpdatedByDateTime { get; set; }
    }
    public class CustomerInfoModel
    {
        public List<CustomerInfo> lstCustomrInfo { get; set; } //= new List<CustomerInfo>();
    }
}
