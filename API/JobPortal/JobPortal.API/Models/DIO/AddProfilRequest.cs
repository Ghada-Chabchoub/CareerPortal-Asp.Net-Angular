using JobPortal.API.Models.Entities;

namespace JobPortal.API.Models.DIO
{
    public class AddProfilRequest
    {
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Email { get; set; }
        public int Phone { get; set; }
        public string Location { get; set; }
        public string Degree { get; set; }
        public string ImageUrl { get; set; }
        public string Major { get; set; }
        public int Age { get; set; }
        public string Description { get; set; }
    }
}
