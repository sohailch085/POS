using Common;
using DataBaseLayer;
using Microsoft.Data.SqlClient;
using System.Data;
using System.Data.SqlTypes;

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
        //public string ExecuteReaderQuery(string Query)
        //{
        //    string ID = "";
        //    con = new SqlConnection(HelperClass.ConnectionStr);
        //    con.Open();
        //    SqlCommand com = new SqlCommand(Query, con);
        //    com.CommandType = CommandType.Text;
        //    ID=com.ExecuteReader().ToString();
        //    con.Close();
        //    return ID;
        //}

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
        public DataTable GetCustomerInfo() 
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_CustomerInfo";
            return dt = ReturnDataTable(query);
        }
        public DataTable GetApprovalRequest()
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_ApprovalRequest";
            return dt = ReturnDataTable(query);
        }
        public DataTable GetSupplierType()
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_SupplierType";
            return dt = ReturnDataTable(query);
        }
        public DataTable GetFilterData(string Id)
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_CustomerFilter @CustomerID="+ Id;
            return dt = ReturnDataTable(query);
        }
        public void DeleteCustomerInfo(string Id)
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Delete_CustomerInfo @ID=" + Id;
             ExecuteQuery(query);
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
        public void AddCustomerDetailsSave(CustomerInfo CustomerDetailsSave)
        {
            try
            {
                SqlConnection con = new SqlConnection(HelperClass.ConnectionStr);
                con.Open();
                SqlCommand cmd = new SqlCommand();
                cmd.Connection = con;
                cmd.CommandText = "Sp_CustomerInfo_InsertOrUpdate";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@CustomerID", CustomerDetailsSave.CustomerID);
                cmd.Parameters.AddWithValue("@CustomerName", CustomerDetailsSave.CustomerName);
                cmd.Parameters.AddWithValue("@ShortName", CustomerDetailsSave.ShortName);
                cmd.Parameters.AddWithValue("@AddressLine1", CustomerDetailsSave.AddressLine1);
                cmd.Parameters.AddWithValue("@AddressLine2", CustomerDetailsSave.AddressLine2);
                cmd.Parameters.AddWithValue("@CustomerTypeID", CustomerDetailsSave.CustomerTypeID);
                cmd.Parameters.AddWithValue("@CustomerTypeName", CustomerDetailsSave.CustomerTypeName);
                cmd.Parameters.AddWithValue("@ParentGroupID", CustomerDetailsSave.ParentGroupID);
                cmd.Parameters.AddWithValue("@ParentGroupName", CustomerDetailsSave.ParentGroupName);
                cmd.Parameters.AddWithValue("@GeographicalTerritoryID", CustomerDetailsSave.GeographicalTerritoryID);
                cmd.Parameters.AddWithValue("@GeographicalTerritoryName", CustomerDetailsSave.GeographicalTerritoryName);
                cmd.Parameters.AddWithValue("@CountryID", CustomerDetailsSave.CountryID);
                cmd.Parameters.AddWithValue("@CountryName", CustomerDetailsSave.CountryName);
                cmd.Parameters.AddWithValue("@CityID", CustomerDetailsSave.CityID);
                cmd.Parameters.AddWithValue("@CityName", CustomerDetailsSave.CityName);
                cmd.Parameters.AddWithValue("@WebAddress", CustomerDetailsSave.WebAddress);
                cmd.Parameters.AddWithValue("@PhoneLandLine", CustomerDetailsSave.PhoneLandLine);
                cmd.Parameters.AddWithValue("@Fax", CustomerDetailsSave.Fax);
                cmd.Parameters.AddWithValue("@PreferredContactMethod", CustomerDetailsSave.PreferredContactMethod);
                cmd.Parameters.AddWithValue("@Retail", CustomerDetailsSave.Retail);
                cmd.Parameters.AddWithValue("@WholeSale", CustomerDetailsSave.WholeSale);
                cmd.Parameters.AddWithValue("@WareHouse", CustomerDetailsSave.WareHouse);
                cmd.Parameters.AddWithValue("@Importer", CustomerDetailsSave.Importer);
                cmd.Parameters.AddWithValue("@ContactTypeID", CustomerDetailsSave.ContactTypeID);
                cmd.Parameters.AddWithValue("@ContactTypeName", CustomerDetailsSave.ContactTypeName);
                cmd.Parameters.AddWithValue("@Department", CustomerDetailsSave.Department);
                cmd.Parameters.AddWithValue("@Name", CustomerDetailsSave.Name);
                cmd.Parameters.AddWithValue("@JobTitle", CustomerDetailsSave.JobTitle);
                cmd.Parameters.AddWithValue("@MobileNo", CustomerDetailsSave.MobileNo);
                cmd.Parameters.AddWithValue("@Email", CustomerDetailsSave.Email);
                cmd.Parameters.AddWithValue("@DocumentFile", new byte[0]);//CustomerDetailsSave.DocumentFile
                if (CustomerDetailsSave.CustomerID == 0)
                {
                    cmd.Parameters.AddWithValue("@CreatedByID", CustomerDetailsSave.CreatedByID);
                    cmd.Parameters.AddWithValue("@CreatedByDateTime", Convert.ToDateTime(CustomerDetailsSave.CreatedByDateTime));
                    cmd.Parameters.AddWithValue("@UpdatedByID", DBNull.Value);
                    cmd.Parameters.AddWithValue("@UpdatedByDateTime", DBNull.Value);
                }
                else
                {
                    cmd.Parameters.AddWithValue("@CreatedByID", DBNull.Value);
                    cmd.Parameters.AddWithValue("@CreatedByDateTime", DBNull.Value);
                    cmd.Parameters.AddWithValue("@UpdatedByID", CustomerDetailsSave.UpdatedByID);
                    cmd.Parameters.AddWithValue("@UpdatedByDateTime", Convert.ToDateTime(CustomerDetailsSave.UpdatedByDateTime));
                    
                }
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
