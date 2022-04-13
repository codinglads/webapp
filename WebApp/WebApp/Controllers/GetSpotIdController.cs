using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    using Database;

    /// <summary>
    /// This route is not used in the project but was originally made to accept
    /// an HttpGet request for a specific spotid, this is now handeled in graphQL
    /// </summary>
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
