using JobPortal.API.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace JobPortal.API.Models.DIO
{
    public class AddCandidatureRequest
    {
        public string Title { get; set; }
        public string Company_name { get; set; }
        public string PNom { get; set; }
        public string PPrenom { get; set; }
        public string PEmail { get; set; }
        public int PPhone { get; set; }
        public string PLocation { get; set; }
        public string PDegree { get; set; }
        public string PImageUrl { get; set; }
        public string PMajor { get; set; }
        public int PAge { get; set; }
        public string PDescription { get; set; }
        public string Etat_Candidature { get; set; }
    }

}
