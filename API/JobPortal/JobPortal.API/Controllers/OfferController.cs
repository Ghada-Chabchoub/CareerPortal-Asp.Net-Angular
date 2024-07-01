using JobPortal.API.Data;
using JobPortal.API.Models.DIO;
using JobPortal.API.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

namespace JobPortal.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OfferController : Controller
    {
        private readonly JobDbContext dbContext;
        public OfferController(JobDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetALlOffers()
        {
            var offers = await dbContext.Offers.ToListAsync();
            return Ok(offers);
        }

        [HttpGet]
        [Route("{id:guid}")]
        [ActionName("GetOfferById")]
        public async Task<IActionResult> GetOfferById(Guid id)
        {
            var offer = await dbContext.Offers.FirstOrDefaultAsync(x => x.Id == id);
            if(offer != null)
            {
                return Ok(offer);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddOffer(AddOfferRequest addOfferRequest)
        {
            var offer = new Offer()
            {
                Title = addOfferRequest.Title,
                Location = addOfferRequest.Location,
                Min_salary = addOfferRequest.Min_salary,
                Max_salary = addOfferRequest.Max_salary,
                Imageurl = addOfferRequest.Imageurl,
                Category = addOfferRequest.Category,
                Job_nature = addOfferRequest.Job_nature,
                Job_location = addOfferRequest.Job_location,
                Company_name = addOfferRequest.Company_name,
                Description = addOfferRequest.Description,
                Visible = addOfferRequest.Visible,
                Archivee = addOfferRequest.Archivee,
                Author = addOfferRequest.Author,
                PublishDate = addOfferRequest.PublishDate,
                UpdateDate = addOfferRequest.UpdateDate
             };
            offer.Id = Guid.NewGuid();
            await dbContext.Offers.AddAsync(offer);
            await dbContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetOfferById),new {id=offer.Id},offer);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult> UpadteOffer([FromRoute] Guid id,UpdateOfferRequest updateOfferRequest)
        {
            // convert DIOto Entity
            var offer = new Offer()
            {
                Title = updateOfferRequest.Title,
                Location = updateOfferRequest.Location,
                Min_salary = updateOfferRequest.Min_salary,
                Max_salary = updateOfferRequest.Max_salary,
                Imageurl = updateOfferRequest.Imageurl,
                Category = updateOfferRequest.Category,
                Job_nature = updateOfferRequest.Job_nature,
                Job_location = updateOfferRequest.Job_location,
                Company_name = updateOfferRequest.Company_name,
                Description = updateOfferRequest.Description,
                Visible = updateOfferRequest.Visible,
                Archivee = updateOfferRequest.Archivee,         
                Author = updateOfferRequest.Author,
                PublishDate = updateOfferRequest.PublishDate,
                UpdateDate = updateOfferRequest.UpdateDate
            };
            //check if exists
            var existingOffer = await dbContext.Offers.FindAsync(id);
            if ( existingOffer != null)
            {
                existingOffer.Title = updateOfferRequest.Title;
                existingOffer.Location = updateOfferRequest.Location;
                existingOffer.Min_salary = updateOfferRequest.Min_salary;
                existingOffer.Max_salary = updateOfferRequest.Max_salary;
                existingOffer.Imageurl = updateOfferRequest.Imageurl;
                existingOffer.Category = updateOfferRequest.Category;
                existingOffer.Job_nature = updateOfferRequest.Job_nature;
                existingOffer.Job_location = updateOfferRequest.Job_location;
                existingOffer.Company_name = updateOfferRequest.Company_name;
                existingOffer.Description = updateOfferRequest.Description;
                existingOffer.Visible = updateOfferRequest.Visible;
                existingOffer.Archivee = updateOfferRequest.Archivee;
                existingOffer.Author = updateOfferRequest.Author;
                existingOffer.PublishDate = updateOfferRequest.PublishDate;
                existingOffer.UpdateDate = updateOfferRequest.UpdateDate;

                await dbContext.SaveChangesAsync();

                return Ok(existingOffer);
            }
            return NotFound();
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> DeleteOffer(Guid id)
        {
            var existingOffer = await dbContext.Offers.FindAsync(id);

            if (existingOffer  != null)
            {
                dbContext.Remove(existingOffer);
                await dbContext.SaveChangesAsync();
                return Ok(existingOffer);
            }

            return NotFound();
        }


    }
}
