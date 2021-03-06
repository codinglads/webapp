namespace WebApp.DataTypes
{
    /// <summary>
    /// This class represents an account within our system
    /// </summary>
    public class Account
    {
        public string username;
        public int accountid;
        public string firstname;
        public string lastname;
        public string email;
        public string address;
        public bool local;

        #region Constructors
        
        public Account()
        {
            username = "";
            accountid = 0;
            firstname = "";
            lastname = "";
            email = "";
            address = "";
            local = false;
        }

        #endregion
    }
}
