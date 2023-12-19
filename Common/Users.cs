namespace Common
{
    public class Users
    {
        public long UserId { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string UserName { get; set; } = "";
        public string Email { get; set; } = "";
        public string Phone { get; set; } = "";
        public string PasswordHash { get; set; } = "";
        public bool IsActive { get; set; }
        public int CreeatedByID { get; set; }
        public DateTime CreatedByDatetime { get; set; }
        public int UpdateByID { get; set; }
        public DateTime UpdateByDatetime { get; set; }
    }
    public class VerifyLoginModel
    {
        public string Email { get; set; } = "";
        public string PasswordHash { get; set; } = "";
    }
    public class UserLoginModel
    {
        public List<VerifyLoginModel> lstLogin { get; set; } = new List<VerifyLoginModel>();
    }
}
