using System.Data.SqlClient;
using WebApp.Database.Tables;

namespace WebApp.Database
{
    public class Database
    {
        public SqlConnection Connection;
        public List<Table> Tables;

        public Database()
        {
            Connection = DatabaseConnection.GetConnection();
            Tables = new List<Table>()
            {
                new A_Accounts()

            };
        }

        // Select statement grabs data from the database by taking in the select
        // query string as well as the column indexs to grab from
        public List<Dictionary<int, string>> Select(string select_string, int[] columns)
        {
            Connection.Open();

            SqlCommand command = new SqlCommand(select_string, Connection);
            SqlDataReader reader = command.ExecuteReader();

            List<Dictionary<int,string>> data = new List<Dictionary<int,string>>();
            while (reader.Read())
            {
                Dictionary<int, string> value = new Dictionary<int, string>();
                foreach(int col in columns)
                {
                    value[col] = reader.GetString(col);
                }
                data.Add(value);
            }

            reader.Close();
            command.Dispose();
            Connection.Close();

            return data;
        }
    
        public void BuildTables()
        {
            Connection.Open();

            foreach(Table table in Tables)
            {

            }
            Connection.Close();
        }
    }
}
