using JobPortal.API.Data;
using JobPortal.API.Models.DIO;
using JobPortal.API.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProfilController : Controller
    {

        private readonly JobDbContext dbContext;
        public ProfilController(JobDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetALlProfil()
        {
            var profils = await dbContext.Profils.ToListAsync();
            return Ok(profils);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetProfilById")]
        public async Task<IActionResult> GetProfilById(Guid id)
        {
            var profil = await dbContext.Profils.FirstOrDefaultAsync(x => x.ID_Profil == id);

            if (profil != null)
            {
                return Ok(profil);
            }
            return NotFound();
        }


        [HttpPost]
        public async Task<IActionResult> AddProfil(AddProfilRequest addProfilRequest)
        {
            var profil = new Profil()
            {
                Nom = addProfilRequest.Nom,
                Prenom = addProfilRequest.Prenom,
                Email = addProfilRequest.Email,
                Phone = addProfilRequest.Phone,
                Location = addProfilRequest.Location,
                Degree = addProfilRequest.Degree,
                ImageUrl = addProfilRequest.ImageUrl,
                Major = addProfilRequest.Major,
                Age = addProfilRequest.Age,
                Description = addProfilRequest.Description,
            };
            profil.ID_Profil = Guid.NewGuid();
            await dbContext.Profils.AddAsync(profil);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProfilById), new { id = profil.ID_Profil }, profil);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpadteProfil([FromRoute] Guid id, UpdateProfilRequest updateProfilRequest)
        {
            // convert DIOto Entity
            var profil = new Profil()
            {
                Nom = updateProfilRequest.Nom,
                Prenom = updateProfilRequest.Prenom,
                Email = updateProfilRequest.Email,
                Phone = updateProfilRequest.Phone,
                Location = updateProfilRequest.Location,
                Degree = updateProfilRequest.Degree,
                ImageUrl = updateProfilRequest.ImageUrl,
                Major = updateProfilRequest.Major,
                Age = updateProfilRequest.Age,
                Description = updateProfilRequest.Description,
            };
            //check if exists
            var existingProfil = await dbContext.Profils.FindAsync(id);
            if (existingProfil != null)
            {
                existingProfil.Nom = updateProfilRequest.Nom;
                existingProfil.Prenom = updateProfilRequest.Prenom;
                existingProfil.Email = updateProfilRequest.Email;
                existingProfil.Phone = updateProfilRequest.Phone;
                existingProfil.Location = updateProfilRequest.Location;
                existingProfil.Degree = updateProfilRequest.Degree;
                existingProfil.ImageUrl = updateProfilRequest.ImageUrl;
                existingProfil.Major = updateProfilRequest.Major;
                existingProfil.Age = updateProfilRequest.Age;
                existingProfil.Description = updateProfilRequest.Description;

                await dbContext.SaveChangesAsync();

                return Ok(existingProfil);
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteProfil(Guid id)
        {
            var existingProfil = await dbContext.Profils.FindAsync(id);

            if (existingProfil != null)
            {
                dbContext.Remove(existingProfil);
                await dbContext.SaveChangesAsync();
                return Ok(existingProfil);
            }

            return NotFound();
        }
    }
}
