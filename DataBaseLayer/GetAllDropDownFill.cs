using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.IO;
using Newtonsoft.Json;

namespace DataBaseLayer
{
    public static class GetAllDropDownFill
    {
        public static string Get_DropdownValues(string Name)
        {
            string NameofDropdown = Name;
            string ProcedureName = "";
            switch (NameofDropdown)
            {
                case "ParentGroup":
                    ProcedureName = "Sp_Get_ParentGroup";
                    break;
                case "ContactType":
                    ProcedureName = "Sp_Get_ContactType";
                    break;
                case "SupplierType":
                    ProcedureName = "Sp_Get_SupplierType";
                    break;
                case "CustomerType":
                    ProcedureName = "Sp_Get_CustomerType";
                    break;
                case "GeographicalTerritory":
                    ProcedureName = "Sp_Get_GeographicalTerritory"; 
                    break;
                case "Countries":
                    ProcedureName = "Sp_Get_Countries";
                    break;
                case "Cities":
                    ProcedureName = "Sp_Get_Cities"; 
                    break;
                default:
                    break;
            }
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            SqlDataAdapter da = new SqlDataAdapter();
            string jsondata="";
            if (!string.IsNullOrWhiteSpace(ProcedureName))
            {
                SqlConnection con = new SqlConnection(HelperClass.ConnectionStr);
                con.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandText = ProcedureName;
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
              //  cmd.CommandTimeout = 3000;
                ds.Tables.Add(dt);
                da = new SqlDataAdapter(cmd);
                da.Fill(dt);
                jsondata = DataTableToJSONWithJSONNet(dt);

                con.Close();
                cmd.Dispose();
                ds.Dispose();
                return jsondata;
            }
            return jsondata;
        }
        public static string DataTableToJSONWithJSONNet(DataTable table)
        {
            string JSONString = string.Empty;
            JSONString = JsonConvert.SerializeObject(table);
            return JSONString;
        }
    }
}
