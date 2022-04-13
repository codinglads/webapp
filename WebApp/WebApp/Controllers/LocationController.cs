using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    /// <summary>
    /// This route accepts a HttpGet request to ROOT_URL/api/location?loc=VALUE
    /// VALUE gets mapped to string loc and this is used to determine if a specific
    /// location exists when getting searched
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class LocationController : ControllerBase
    {
        /// <summary>
        /// If the location exists, return the path to it
        /// </summary>
        /// <param name="loc">Takes in the search string</param>
        /// <returns>List of string where first element is the path</returns>
        [HttpGet]
        public IEnumerable<string> Get(string loc)
        {
            switch (loc)
            {
                case "Syracuse":
                    return new string[] { "syracuse" };
                default:
                    return new string[] { "404" };
            }
        }
    }
}
