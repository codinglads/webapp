using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    using Database;

    [Route("api/[controller]")]
    [ApiController]
    public class GetSpotIdController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<int> Get()
        {
            return new int[] { 1 };
        }
    }
}
