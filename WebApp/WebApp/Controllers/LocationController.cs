using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LocationController : ControllerBase
    {
        #region Public Methods

        public string GetLocation(string location)
        {
            switch (location)
            {
                case "Syracuse":
                    return "syracuse";
                default:
                    return "notfound";
            }
        }

        #endregion

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
