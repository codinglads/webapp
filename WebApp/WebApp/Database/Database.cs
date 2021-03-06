using System.Data;
using System.Data.SqlClient;
using System.Text;
using WebApp.Database.Tables;

namespace WebApp.Database
{
    /// <summary>
    /// This class represents the object version of our database in this system
    /// </summary>
    public class Database : IDisposable
    { 
        /// <summary>
        /// Connection to Database and list of tables in database
        /// </summary>
        public SqlConnection Connection;
        public List<Table> Tables;

        public Database()
        {
            Connection = DatabaseConnection.GetConnection();
            Tables = new List<Table>()
            {
                new A_Accounts(),
                new S_SequenceCodes()
            };
        }

        /// <summary>
        /// Recommended to close database connections
        /// </summary>
        public void Dispose()
        {
            if (Connection != null && Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            GC.SuppressFinalize(this);
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

        /// <summary>
        /// This method is a general idea for updating the SQL Database
        /// </summary>
        /// <param name="update_string">String to be sent to SQL Command</param>
        public void Update(string update_string)
        {
            Connection.Open();
            SqlCommand command = new SqlCommand(update_string, Connection);
            command.ExecuteNonQuery();
            command.Dispose();
            Connection.Close();
        }

        /// <summary>
        /// The following methods are used to build the database when running the application
        /// </summary>
        #region Database Table Building
        
        /// Adds table classes to Tables property above
        public void InitializeTables()
        {
            List<Table> tables = new List<Table>();

            tables.Add(new A_Accounts());

            Tables = tables;
        }
        
        /// <summary>
        /// Checks if the table already exists, if not it creates it
        /// </summary>
        public void BuildTables()
        {
            Connection.Open();

            foreach(Table table in Tables)
            {
                SqlCommand command;
                StringBuilder commandString = new StringBuilder(
                    String.Format(
                        "IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='{0}' and xtype='U') CREATE TABLE {0} (",
                        table.Name));
                string[] cols = table.Columns;
                for(int i = 0; i < cols.Length; i++)
                {
                    string col = cols[i];
                    if (i == 0)
                    {
                        commandString.Append(col);
                    }
                    else
                    {
                        commandString.AppendFormat(", {0}", col);
                    }
                }
                commandString.Append(");");
                command = new SqlCommand(commandString.ToString(), Connection);
                command.ExecuteNonQuery();
                command.Dispose();
            }
            Connection.Close();
        }
        
        /// <summary>
        /// Method is not currently used in project
        /// </summary>
        public void VerifyColums()
        {
            Connection.Open();

            foreach (Table table in Tables)
            {
                string[] colNames = table.Columns;
                colNames = colNames.Select(s => s.Split(' ').First()).ToArray();
                for (int i = 0; i <= colNames.Length; i++)
                {
                    SqlCommand command;
                    StringBuilder commandString = new StringBuilder("IF NOT EXISTS (SELECT * FROM sys.columns WHERE ");
                    commandString.Append(String.Format("object_id = OBJECT_ID(N'[snapshot_master].[{0}]' ", table.Name));
                    commandString.Append(String.Format("AND name = '{0}) ", colNames[i]));
                    commandString.Append(String.Format("ALTER TABLE {0} ADD {1} ", 
                        table.Name, table.Columns[i]));
                    commandString.Append("");

                    command = new SqlCommand(commandString.ToString(), Connection);
                    command.ExecuteNonQuery();
                    command.Dispose();
                }
            }

            Connection.Close();
        }
        
        /// <summary>
        /// In DEBUG mode the following method will delete all existing tables and 
        /// rebuild them from scratch. This is a simple way to account for new columns
        /// being added to existing tables while developing
        /// </summary>
        public void DeleteTables()
        {
            Connection.Open();

            foreach (Table table in Tables)
            {
                SqlCommand command;
                StringBuilder commandString = new StringBuilder(
                    String.Format(
                        "IF EXISTS (SELECT * FROM sysobjects WHERE name='{0}' and xtype='U') DROP TABLE {0}",
                        table.Name));

                command = new SqlCommand(commandString.ToString(), Connection);
                command.ExecuteNonQuery();
                command.Dispose();
            }
            Connection.Close();
        }

        #endregion
    }
}
