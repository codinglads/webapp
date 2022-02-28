
using System.Data.SqlClient;

namespace WebApp.Database
{
    /// <summary>
    /// This class is the gateway by which our program will connect to a SQL Database
    /// both locally and in the Azure Cloud
    /// </summary>
    public class DatabaseConnection
    {
        private static string _connectionString
        {
            get
            {
                string[] lines = File.ReadLines("Database/DatabaseConnection.txt").ToArray();
                return lines[0];
            }
        }

        public static SqlConnection GetConnection()
        {
            if (_connectionString == null) return null;

            SqlConnection connection = new SqlConnection(_connectionString);

            return connection;
        }
    }
}
