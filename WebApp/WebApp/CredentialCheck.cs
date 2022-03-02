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



public class CredentialCheck{ 
    public void CheckCredentials(){
    Database db = new Database();
    //the @ is the connection string
    SqlConnection sqlcon = new SqlConnection(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\cedmo\OneDrive\Documents\login.mdf;Integrated Security=True;Connect Timeout=30");
    List<Dictionary<int, string>> username_entries = db.Select("select * from A_Accounts Where username='admin'", new int[] {0});
    List<Dictionary<int, string>> password_entries = db.Select("select * from A_Accounts Where password='pass'", new int[] {1});
    //create object which will send query through our connection to server
    if((username_entries.Count == 0) && (password_entries.Count == 0))
    {
        Console.WriteLine("wrong");
    }
    else
    {
        Console.WriteLine("success");
    }
}
}