using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace DataBaseLayer
{
    public static class HelperClass
    {
        public static string ConnectionStr = "Data Source=(local);Initial Catalog=POS_DB;Persist Security Info=True;User ID=sa;Password=pwd;Encrypt=False";
    }
}
