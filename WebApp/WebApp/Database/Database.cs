﻿using System.Data.SqlClient;
using System.Text;
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

        #region Database Table Building
        public void InitializeTables()
        {
            List<Table> tables = new List<Table>();

            tables.Add(new A_Accounts());

            Tables = tables;
        }
        
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
        #endregion
    }
}
