using JobPortal.API.Data;
using login.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly JobDbContext dbContext;

        public AccountController(JobDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (await dbContext.Accounts.AnyAsync(u => u.Email == user.Email))
            {
                ModelState.AddModelError("Email", "Email already exists. Please choose a different email.");
                return BadRequest(ModelState);
            }

            dbContext.Accounts.Add(user);
            await dbContext.SaveChangesAsync();

            return Ok(new { Message = "Registration successful" });
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] User model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await dbContext.Accounts.FirstOrDefaultAsync(u => u.Email == model.Email);

            if (user != null && user.Password == model.Password)
            {
                return Ok(new { Message = "Login successful" });
            }
            else
            {
                ModelState.AddModelError("", "Invalid email or password");
                return BadRequest(ModelState);
            }
        }


        [HttpGet("GetUserRole")]
        public async Task<IActionResult> GetUserRole(string email)
        {
            var user = await dbContext.Accounts.FirstOrDefaultAsync(u => u.Email == email);

            if (user != null)
            {
                var userRole = user.Role;
                return Ok(new { Role = userRole });
            }
            else
            {
                return NotFound(new { Message = "User not found" });
            }
        }
    }
}
