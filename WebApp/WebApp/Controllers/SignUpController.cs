using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    using Database;

    [Route("api/[controller]")]
    [ApiController]
    public class SignUpController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get(string email, string password, string firstName, string lastName)
        {
            try
            {
                string commString = "INSERT INTO A_Accounts(firstName, lastName, email, password) VALUES (@val1, @val2, @val3, @val4)";
                SqlConnection conn = DatabaseConnection.GetConnection();
                //create an sqlCommand
                //Why is this done? To sanitize inputs and prevent injection into the string..
                using (SqlCommand comm = new SqlCommand())
                {
                    comm.Connection = conn;
                    comm.CommandText = commString;
                    //where the sanitizing happens
                    //santizing prevents adding malitious pieces of code into the query strings
                    //the strings next to the @val need to be taken from front end
                    comm.Parameters.AddWithValue("@val1", firstName);
                    comm.Parameters.AddWithValue("@val2", lastName);
                    comm.Parameters.AddWithValue("@val3", email);
                    comm.Parameters.AddWithValue("@val4", password);
                    //open the connection
                    conn.Open();
                    //execute the query we just wrote
                    comm.ExecuteNonQuery();
                    conn.Close();
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }
    }
}
