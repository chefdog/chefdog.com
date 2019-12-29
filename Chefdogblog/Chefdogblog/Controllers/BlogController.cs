using Chefdogblog.Intefaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Threading.Tasks;

namespace Chefdogblog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        private IBlogService blogService;
        private IOptionsSnapshot<BlogSettings> blogSettings;

        public BlogController(IBlogService blog, IOptionsSnapshot<BlogSettings> settings)
        {
            blogService = blog;
            blogSettings = settings;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetPosts(int page = 0) {
            try
            {
                var posts = await blogService.GetPosts(blogSettings.Value.PostsPerPage, blogSettings.Value.PostsPerPage * page);
                return Ok(posts);
            }
            catch (Exception ex) {
                return NotFound();
            }
        }
    }
}