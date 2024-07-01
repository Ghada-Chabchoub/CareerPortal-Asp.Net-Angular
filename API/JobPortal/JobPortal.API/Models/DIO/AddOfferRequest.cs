namespace JobPortal.API.Models.DIO
{
    public class AddOfferRequest
    {
        public string Title { get; set; }
        public string Location { get; set; }
        public string Min_salary { get; set; }
        public string Max_salary { get; set; }
        public string Imageurl { get; set; }
        public string Category { get; set; }
        public string Job_nature { get; set; }
        public string Job_location { get; set; }
        public string Company_name { get; set; }
        public string Description { get; set; }
        public bool Visible { get; set; }
        public bool Archivee { get; set; }
        public string Author { get; set; }
        public DateTime PublishDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
