using JobPortal.API.Data;
using JobPortal.API.Models.DIO;
using JobPortal.API.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CandidatureController : Controller
    {
        private readonly JobDbContext dbContext;
        public CandidatureController(JobDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetALlCandidature()
        {
            var candidatures = await dbContext.Candidatures.ToListAsync();
            return Ok(candidatures);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetCandidatureById")]
        public async Task<IActionResult> GetCandidatureById(Guid id)
        {
            var candidature = await dbContext.Candidatures.FirstOrDefaultAsync(x => x.ID_Candidature == id);
            if (candidature != null)
            {
                return Ok(candidature);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddCandidature(AddCandidatureRequest addCandidatureRequest)
        {
            var candidature = new Candidature()
            {
                Title = addCandidatureRequest.Title,
                Company_name = addCandidatureRequest.Company_name,
                PNom = addCandidatureRequest.PNom,
                PPrenom = addCandidatureRequest.PPrenom,

                PEmail = addCandidatureRequest.PEmail,
                PPhone = addCandidatureRequest.PPhone,
                PLocation = addCandidatureRequest.PLocation,

                PDegree = addCandidatureRequest.PDegree,
                PImageUrl = addCandidatureRequest.PImageUrl,
                PMajor = addCandidatureRequest.PMajor,

                PAge = addCandidatureRequest.PAge,
                PDescription = addCandidatureRequest.PDescription,
                Etat_Candidature = addCandidatureRequest.Etat_Candidature,

            };

            candidature.ID_Candidature = Guid.NewGuid();
            await dbContext.Candidatures.AddAsync(candidature);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCandidatureById), new { id = candidature.ID_Candidature }, candidature);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpadteCandidature([FromRoute] Guid id, UpdateCandidatureRequest updateCandidatureRequest)
        {
            // convert DIOto Entity
            var candidature = new Candidature()
            {
               Etat_Candidature = updateCandidatureRequest.Etat_Candidature
            };
            //check if exists
            var existingCandidature = await dbContext.Candidatures.FindAsync(id);
            if (existingCandidature != null)
            {
                existingCandidature.Etat_Candidature = updateCandidatureRequest.Etat_Candidature;

                await dbContext.SaveChangesAsync();

                return Ok(existingCandidature);
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteCandidature(Guid id)
        {
            var existingCandidature = await dbContext.Candidatures.FindAsync(id);

            if (existingCandidature != null)
            {
                dbContext.Remove(existingCandidature);
                await dbContext.SaveChangesAsync();
                return Ok(existingCandidature);
            }

            return NotFound();
        }

    }
}
