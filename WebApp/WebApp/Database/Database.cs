using System.Data.SqlClient;

namespace WebApp.Database
{
    public class Database
    {
        public SqlConnection Connection;

        public Database()
        {
            Connection = DatabaseConnection.GetConnection();
        }

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
    }
}
