using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace login.Models
{
    public class User
    {
        [DefaultValue(0)]
        public int Id { get; set; }
        [Required(ErrorMessage = "please enter a valid email")]
        [EmailAddress] 
        public string Email { get; set; }

        [Required(ErrorMessage = "please enter a valid password")]
       
        [DataType(DataType.Password)]
        public string Password { get; set; }

    }
}
