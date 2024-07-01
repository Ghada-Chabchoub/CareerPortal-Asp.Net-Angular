using JobPortal.API.Models.Entities;
using login.Models;
using Microsoft.EntityFrameworkCore;

namespace JobPortal.API.Data
{
    public class JobDbContext : DbContext
    {
        public JobDbContext(DbContextOptions options) : base(options)
        {
        }

        //DbSet

        public DbSet<Offer> Offers { get; set; }
        public DbSet<Candidature> Candidatures { get; set; }
        public DbSet<Profil> Profils { get; set; }
        public DbSet<RegisterModel> Accounts { get; set; }
    }
}
