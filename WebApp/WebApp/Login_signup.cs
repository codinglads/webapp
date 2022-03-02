using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
//1. import System.Data.SqlClient
using System.Data.SqlClient;
using WebApp.Database;



public class Login_signup{ 
    public void CheckCredentials(){
    Database db = new Database();
        //gets connection string from DatabaseConnections.txt
        SqlConnection Connection = DatabaseConnection.GetConnection();       
        //need to get username and password from frontend
        List<Dictionary<int, string>> username_entries = db.Select("select * from A_Accounts Where username='admin'", new int[] {0});
    List<Dictionary<int, string>> password_entries = db.Select("select * from A_Accounts Where password='pass'", new int[] {1});
    //create object which will send query through our connection to server
    if(((username_entries.Count == 0) || (password_entries.Count == 0)))
    //change to true false 
    {
            System.Diagnostics.Debug.WriteLine("wrong");
    }
    else
    {
            System.Diagnostics.Debug.WriteLine("success");
        }
}
    public void signUp()
    {
        Database db = new Database();
        //the 'newUsername' needs to be taken from front end
        List<Dictionary<int, string>> username_entries = db.Select("select * from A_Accounts Where username='newUsername'", new int[] { 0 });
        if(username_entries.Count != 0)
        {
            System.Diagnostics.Debug.WriteLine("username already exists");
        }
        else
        {
            try
            {
                string commString = "INSERT INTO A_Accounts(username, password) VALUES (@val1, @val2)";
                SqlConnection conn = DatabaseConnection.GetConnection();
                {
                    //create an sqlCommand
                    //Why is this done? To sanitize inputs and prevent injection into the string..
                    using (SqlCommand comm = new SqlCommand())
                    {
                        comm.Connection = conn;
                        comm.CommandText = commString;
                        //where the sanitizing happens
                        //santizing prevents adding malitious pieces of code into the query strings
                        //the strings next to the @val need to be taken from front end
                        comm.Parameters.AddWithValue("@val1", "newUsername");
                        comm.Parameters.AddWithValue("@val2", "newPassword");
                        //open the connection
                        conn.Open();
                        //execute the query we just wrote
                        comm.ExecuteNonQuery();
                        conn.Close();
                    }
                }
                System.Diagnostics.Debug.WriteLine("Sucessfully registered!");
                conn.Close();
            }
            catch { System.Diagnostics.Debug.WriteLine("big fat error"); }

        }

    }
}