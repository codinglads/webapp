using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    using Database;
    using System.Text;
    using Database.Tables;

    /// <summary>
    /// This route accepts requests to ROOT_URL/api/signin?email=VALUE1&password=VALUE2
    /// this takes the two input params and attemps to find a match in our database
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        /// <summary>
        /// Trys to match the sign in request with an account in our database
        /// </summary>
        /// <param name="email">Users email as a string</param>
        /// <param name="password">Users password as a string</param>
        /// <returns>Ok request if the sign in is successful, otherwise BadRequest</returns>
        [HttpGet]
        public IActionResult Login(string email, string password)
        {
            Database db = new Database();
            StringBuilder sb = new StringBuilder("SELECT * FROM ");
            sb.Append(new A_Accounts().Name);
            sb.Append(String.Format(" WHERE email='{0}' AND password='{1}'",
                email, password));
            List<Dictionary<int, string>> table = db.Select(sb.ToString(), new int[] { 1, 5 });
            if (table.Count > 0)
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
