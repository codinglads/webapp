﻿namespace WebApp.Database.Tables
{
    public class A_Accounts : Table
    {
        private const string username = "username varchar(50)";
        private const string password = "password varchar(50)";
        private const string accountid = "accountid int";
        private const string first_name = "firstName varchar(50)";
        private const string last_name = "lastName varchar(50)";
        private const string email = "email varchar(50)";
        private const string address = "address varchar(75)";
        private const string local = "local varchar(10)";

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

        public override string Name
        {
            get
            {
                return "A_Accounts";
            }
        }

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
