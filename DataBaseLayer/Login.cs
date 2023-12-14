using CommonLayer;
using Microsoft.Data.SqlClient;

namespace DataBaseLayer
{
    public class Login
    {
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
