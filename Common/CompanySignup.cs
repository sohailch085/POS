using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLayer
{
    public class CompanySignup
    {
       public int SignupID { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public string Country { get; set;}= string.Empty;
        public string FirstName { get; set;}=string.Empty;
        public string LastName { get; set;} = string.Empty;
        public string ContactEmail { get; set; } = string.Empty;
        public string ContactPhone { get; set; } = string.Empty;
        public string WebSite { get; set; }= string.Empty;
        public string PreferredContactMethod { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string BusinessDescription { get; set; } = string.Empty;
    }
    public class CompanysignupModel
    {
        public List<CompanySignup> lstcompanySignups { get; set; }=new List<CompanySignup>();
    }
}
