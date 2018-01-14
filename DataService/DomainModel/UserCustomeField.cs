using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DataService.DomainModel
{
    public class UserCustomeField
    {
        [Key]
        public int Id { get; set; }
        public int UserId { get; set; }
        public int Postlimit { get; set; }
        public DateTime CreationDate { get; set; }
        public ICollection<FavoriteTags> FavoriteTags;
    }
}
