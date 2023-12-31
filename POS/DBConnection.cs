﻿using Common;
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
        public DataTable GetTraceabilityType()
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_TraceabilityType";
            return dt = ReturnDataTable(query);
        }
        public DataTable GetFabricSupplier()
        {
            DataTable dt = new DataTable();
            string query = " select DISTINCT V.VenderLibraryID ,V.VenderName from vender V JOIN VenderDetail VD on VD.VenderID =V.VenderLibraryID  \r\n    join SupplierType ST on ST.TypeId =VD.ID join VenderDept vdd on vdd.VenderLibraryID =v.VenderLibraryID  where VD.Type = 'Supplier Type'   and vdd.DepartmentID =5  AND  (ST.SupplierType ='PRE SUPPLIER-FABRIC/KNITS' or  ST.SupplierType ='PRE SUPPLIER-FABRIC/WOVEN')  order by V.VenderName asc";
            return dt = ReturnDataTable(query);
        }  
        public DataTable GetFabricType()
        {
            DataTable dt = new DataTable();
            string query = "select FabricTypeId,FabricType from FabricType where FabricTypeId <>3";
            return dt = ReturnDataTable(query);
        } 
        public DataTable GetFabricKind()
        {
            DataTable dt = new DataTable();
            string query = "select FabricKindId,FabricKind as FabricKindName from FabricKind order by FabricKindName asc";
            return dt = ReturnDataTable(query);
        } 
        public DataTable GetAccessoriesSupplier()
        {
            DataTable dt = new DataTable();
            string query = " select DISTINCT V.VenderLibraryID ,V.VenderName from vender V JOIN VenderDetail VD on VD.VenderID =V.VenderLibraryID join SupplierType ST on ST.TypeId =VD.ID join VenderDept vdd on vdd.VenderLibraryID =v.VenderLibraryID where VD.Type = 'Supplier Type'   and vdd.DepartmentID =5  AND  (ST.SupplierType ='PRE SUPPLIER-ACCESSORIES')  order by V.VenderName asc";
            return dt = ReturnDataTable(query);
        } 
        public DataTable GetAccessories()
        {
            DataTable dt = new DataTable();
            string query = "select VVIID,Name from VenderVerticalIntegration where isactive=2 and VVIID not in(35) order by Name asc ";
            return dt = ReturnDataTable(query);
        }  
        public DataTable GetAccessoriesCurrency()
        {
            DataTable dt = new DataTable();
            string query = "select CurrencyID,CurrencyName from Currency where CurrencyID in(73,9,110,46,6) order by CurrencyName asc";
            return dt = ReturnDataTable(query);
        }  
        public DataTable GetZipperSupplier()
        {
            DataTable dt = new DataTable();
            string query = "select DISTINCT V.VenderLibraryID ,V.VenderName from vender V JOIN VenderDetail VD on VD.VenderID =V.VenderLibraryID join SupplierType ST on ST.TypeId =VD.ID join VenderDept vdd on vdd.VenderLibraryID =v.VenderLibraryID where VD.Type = 'Supplier Type'   and vdd.DepartmentID =5 AND  (ST.SupplierType ='PRE SUPPLIER-ZIPPER') order by V.VenderName asc";
            return dt = ReturnDataTable(query);
        } 
        public DataTable GetZipperAccessories()
        {
            DataTable dt = new DataTable();
            string query = "select VVIID,Name from VenderVerticalIntegration where isactive=2 and vviid=35  order by Name asc";
            return dt = ReturnDataTable(query);
        } 
        public DataTable GetYarnType()
        {
            DataTable dt = new DataTable();
            string query = "select YarnTypeId,YarnType as YarnTypeName from YarnType V order by YarnTypeName asc";
            return dt = ReturnDataTable(query);
        } 
        public DataTable GetTraceabilityCard()
        {
            DataTable dt = new DataTable();
            string query = "select s.ID,s.POID,s.BatchDONo,FORMAT(s.SourceDate,'yyyy-MM-dd') as SourceDate,v.VenderName,t.FabricType,k.FabricKind as FabricKindName from FabricPreSupplier s inner join FabricType t on s.FabricTypeID=t.FabricTypeId inner join FabricKind k on s.FabricKindId=k.FabricKindId inner join Vender v on s.VenderLibraryID=v.VenderLibraryID where s.POID=4";
            return dt = ReturnDataTable(query);
        }
        public DataTable GetVenderVerticalIntegration()
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_VenderVerticalIntegration";
            return dt = ReturnDataTable(query);
        }
        public DataTable GetFabricProcess()
        {
            DataTable dt = new DataTable();
            string query = "EXEC Sp_Get_FabricProcess";
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
