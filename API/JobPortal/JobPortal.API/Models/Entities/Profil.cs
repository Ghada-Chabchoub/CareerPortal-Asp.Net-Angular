﻿using System.ComponentModel.DataAnnotations;

namespace JobPortal.API.Models.Entities
{
    public class Profil
    {
        [Key]
        public Guid ID_Profil { get; set; }
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
