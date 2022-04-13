
using System.Data.SqlClient;

namespace WebApp.Database
{
    /// <summary>
    /// This class is the gateway by which our program will connect to a SQL Database
    /// both locally and in the Azure Cloud
    /// </summary>
    public class DatabaseConnection
    {
        /// <summary>
        /// This connectionString is how the system connects to the SQL Server
        /// Below this file there needs to be another file called DatabaseConnection.txt
        /// this txt file should have one line, the connectionString for your local 
        /// SQL Server database
        /// </summary>
        private static string _connectionString
        {
            get
            {
                string[] lines = File.ReadLines("Database/DatabaseConnection.txt").ToArray();
                return lines[0];
            }
        }

        /// <summary>
        /// This method uses the connection string to connect to the local SQL Server database
        /// </summary>
        /// <returns>SqlConnection object</returns>
        public static SqlConnection GetConnection()
        {
            if (_connectionString == null) return null;

            SqlConnection connection = new SqlConnection(_connectionString);

            return connection;
        }
    }
}
