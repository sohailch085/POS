using Common;
using DataBaseLayer;
using Microsoft.Data.SqlClient;
using System.Data;

namespace POS
{
    public class DBConnection
    {
        SqlConnection con;

        public DataTable ReturnDataTable(string query)
        {

            DataTable dt = new DataTable();
            con = new SqlConnection(HelperClass.ConnectionStr);
            con.Open();
            SqlCommand com = new SqlCommand(query, con);
            com.CommandType = CommandType.Text;
            SqlDataAdapter da = new SqlDataAdapter(com);
            da.SelectCommand.CommandTimeout = 100000;
            da.Fill(dt);
            con.Close();
            return dt;
        }
        public string ReturnColumn(string Query, string ColumnName)
        {
            string result = "";
            DataTable dt = new DataTable();
            dt = ReturnDataTable(Query);
            if (dt.Rows.Count > 0)
            {
                result = Convert.ToString(dt.Rows[0][ColumnName]);
            }
            return result;
        }
        public void ExecuteQuery(string Query)
        {
            con = new SqlConnection(HelperClass.ConnectionStr);
            con.Open();
            SqlCommand com = new SqlCommand(Query, con);
            com.CommandType = CommandType.Text;
            com.ExecuteNonQuery();
            con.Close();
        }

        public DataTable VerifyLogin(string Email,string PasswordHash)
        {
            try
            {
                DataTable dt = new DataTable();
                string query = "EXEC Sp_Get_UsersLoginVerify '" + Email + "','" + PasswordHash + "'";
                return dt = ReturnDataTable(query);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void AddCompanySignup(CompanySignup companySignup)
        {
            try
            {
                SqlConnection con = new SqlConnection(HelperClass.ConnectionStr);
                con.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandText = "sp_CompanySignup_Insert";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CompanyName", companySignup.CompanyName);
                cmd.Parameters.AddWithValue("@Country", companySignup.Country);
                cmd.Parameters.AddWithValue("@FirstName", companySignup.FirstName);
                cmd.Parameters.AddWithValue("@LastName", companySignup.LastName);
                cmd.Parameters.AddWithValue("@ContactEmail", companySignup.ContactEmail);
                cmd.Parameters.AddWithValue("@ContactPhone", companySignup.ContactPhone);
                cmd.Parameters.AddWithValue("@WebSite", companySignup.WebSite);
                cmd.Parameters.AddWithValue("@PreferredContactMethod", companySignup.PreferredContactMethod);
                cmd.Parameters.AddWithValue("@Address", companySignup.Address);
                cmd.Parameters.AddWithValue("@BusinessDescription", companySignup.BusinessDescription);
                cmd.Parameters.AddWithValue("@RequestDate", DateTime.Now);
                cmd.ExecuteNonQuery();
                con.Close();
                cmd.Dispose();
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
    }
}
