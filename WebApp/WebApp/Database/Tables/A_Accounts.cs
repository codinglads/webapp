namespace WebApp.Database.Tables
{
    /// <summary>
    /// This class represents the account table in our sql database
    /// </summary>
    public class A_Accounts : Table
    {
        /// <summary>
        /// These are the column descriptions for all cols in database
        /// </summary>
        private const string username = "username varchar(50)";
        private const string password = "password varchar(50)";
        private const string accountid = "accountid int";
        private const string first_name = "firstName varchar(50)";
        private const string last_name = "lastName varchar(50)";
        private const string email = "email varchar(50)";
        private const string address = "address varchar(75)";
        private const string local = "local varchar(10)";

        /// <summary>
        /// These are the indexes (aka which column #)
        /// </summary>
        #region Column Indexes

        public const int _username_ = 0;
        public const int _password_ = 1;
        public const int _accountid_ = 2;
        public const int _first_name_ = 3;
        public const int _last_name_ = 4;
        public const int _email_ = 5;
        public const int _address_ = 6;
        public const int _local_ = 7;

        #endregion

        /// <summary>
        /// Returns name of the table in database
        /// </summary>
        public override string Name
        {
            get
            {
                return "A_Accounts";
            }
        }

        /// <summary>
        /// Returns a list of all of the column descriptions
        /// This is used to build the database
        /// </summary>
        public override string[] Columns
        {
            get
            {
                return new string[]
                {
                    username, password, accountid, first_name, last_name, email, address, local
                };
            }
        }
    }
}
