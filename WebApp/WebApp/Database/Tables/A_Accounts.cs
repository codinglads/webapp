namespace WebApp.Database.Tables
{
    public class A_Accounts : Table
    {
        private const string username = "username varchar(50)";
        private const string password = "password varchar(50)";
        public override string Name
        {
            get
            {
                return "A_Accounts";
            }
        }

        private const string accountid = "accountid int";
        private const string first_name = "firstName varchar(50)";
        private const string last_name = "lastName varchar(50)";
        private const string email = "email varchar(50)";

        public override string[] Columns
        {
            get
            {
                return new string[]
                {
                    username, password, accountid, first_name, last_name, email
                };
            }
        }
    }
}
