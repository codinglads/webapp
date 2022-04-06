using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    using Database;
    using System.Text;
    using Database.Tables;

    [Route("api/[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    {
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

    public class LoginData
    {
        public string? username;
        public string? password;
    }
}
