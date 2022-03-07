using WebApp.DataTypes;
using WebApp.Database.Tables;

namespace WebApp.Admin
{
    using Database;
    using System.Text;

    public static class Accounts
    {
        public static Account[] GetAccounts()
        {
            using (Database db = new Database())
            {
                A_Accounts acctTable = new A_Accounts();
                List<Dictionary<int, string>> data = db.Select(
                    "SELECT * FROM A_Accounts",
                    Enumerable.Range(0, acctTable.Columns.Length).ToArray());


                List<Account> accounts = new List<Account>();
                if (data == null) return accounts.ToArray();

                foreach (Dictionary<int, string> row in data)
                {
                    Account account = new Account();
                    account.username = row[A_Accounts._username_];
                    account.accountid = Int32.Parse(row[A_Accounts._accountid_]);
                    account.firstname = row[A_Accounts._first_name_];
                    account.lastname = row[A_Accounts._last_name_];
                    account.email = row[A_Accounts._email_];
                    account.address = row[A_Accounts._address_];
                    account.local = bool.Parse(row[A_Accounts._local_]);
                    accounts.Add(account);
                }

                return accounts.ToArray();
            }
        }
    
        public static Account GetAccount(int accountid)
        {
            using (Database db = new Database())
            {
                A_Accounts acctTable = new A_Accounts();
                List<Dictionary<int, string>> data = db.Select(
                    String.Format("SELECT * FROM A_Accounts WHERE accountid={0}", accountid),
                    Enumerable.Range(0, acctTable.Columns.Length).ToArray());

                if (data.Count == 0) return null;
                if (data.Count > 1) throw new Exception("There are multiple accounts with this id");

                Dictionary<int, string> row = data[0];

                Account account = new Account();
                account.username = row[A_Accounts._username_];
                account.accountid = Int32.Parse(row[A_Accounts._accountid_]);
                account.firstname = row[A_Accounts._first_name_];
                account.lastname = row[A_Accounts._last_name_];
                account.email = row[A_Accounts._email_];
                account.address = row[A_Accounts._address_];
                account.local = bool.Parse(row[A_Accounts._local_]);

                return account;
            }
        }

        public static void UpdateAccount(Account acct)
        {
            StringBuilder sb = new StringBuilder("UPDATE A_Accounts SET ");
            sb.AppendFormat("username = {0}, accountid = {1}, ", acct.username, acct.accountid);
            sb.AppendFormat("firstName = {0}, lastName = {1}, ", acct.firstname, acct.lastname);
            sb.AppendFormat("email = {0}, address = {1}, ", acct.email, acct.address);
            sb.AppendFormat("local = {0}", acct.local);

            using (Database db = new Database())
            {
                db.Update(sb.ToString());
            }
        }
    
    
    }
}
