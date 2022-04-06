using Microsoft.AspNetCore.Http;
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
                Database db = new Database();
                /*StringBuilder sb = new StringBuilder("SELECT * FROM ");
                sb.Append(new A_Accounts().Name);
                sb.Append(String.Format(" WHERE username='{0}' AND password='{1}'",
                    username, password));
                List<Dictionary<int, string>> table = db.Select(sb.ToString(), new int[] { 0, 1 });
                if (table.Count > 0)
                {
                    return Ok();
                }*/
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
            return Ok();
        }
    }
}
