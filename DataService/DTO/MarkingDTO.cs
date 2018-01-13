using System;
using System.Collections.Generic;
using System.Text;
using DataService.DomainModel;

namespace DataService.DTO
{
    public class MarkingDTO
    {
        public int MarkedPostId { get; set; }
        public int UserId { get; set; }
        public int PostId { get; set; }
        public DateTime MarkingDate { get; set; }
        public  AnnotationsDTO Annotations;

        public MarkingDTO(int MarkedPostId, int UserId, int PostId, DateTime MarkingDate, AnnotationsDTO Annotations)
        {
            this.MarkedPostId = MarkedPostId;
            this.UserId = UserId;
            this.PostId = PostId;
            this.MarkingDate = MarkingDate;
            this.Annotations = Annotations;
       
        }

    }
}
