using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebService.Models;
using DataService.DataAccessLayer;
using AutoMapper;
using Microsoft.AspNetCore.Routing;
namespace WebService.Controllers
{
    [Route("api/marking")]
    public class MarkingController : CustomeController
    {
        private readonly IRepository _repository;
        private readonly IMapper _IMapper;

        public MarkingController(IRepository _Irepository, IMapper _IMapper)
        {
            this._repository = _Irepository;
            this._IMapper = _IMapper;

        }

        [HttpGet("{Uid}/{Pid}",Name =nameof(GetMarking) )]
        public IActionResult GetMarking(int Uid,int Pid) {
            var markedPost = _repository.GetMarkingById(Uid,Pid);
            var newMarkingModel = new MarkingModel();
            newMarkingModel.MarkingId = markedPost.MarkedPostId;
            newMarkingModel.UserId = markedPost.UserId;
            newMarkingModel.PostId = markedPost.PostId;
            newMarkingModel.MarkingUrl = Url.Link(nameof(GetMarking), new { Uid= markedPost.UserId , Pid = markedPost.MarkedPostId });
            // Checking whether the post is an answer or question to give it the correct link
            newMarkingModel.PostUrl = _repository.GetPostById(markedPost.PostId).PostTypeId == 2 ?
                  Url.Link(nameof(AnswerController.GetAnswerById), new { Qid = _repository.GetPostById(markedPost.PostId).ParentId, Aid = markedPost.MarkedPostId }) :
                  Url.Link(nameof(QuestionController.GetQuestionById), new { Qid = markedPost.PostId });
            newMarkingModel.RemoveMarking = Url.Link(nameof(RemoveMarking), new { Mid = markedPost.MarkedPostId });
          
            // Checking whether there's annotation or not
            newMarkingModel.MarkingAnnotation = _repository.GetAnnotationsByMarkingId(markedPost.MarkedPostId).ToList().Select(a => new AnnotationModel
            {
                MarkingLink = Url.Link(nameof(GetMarking), new { Pid = a.MarkedPostId }),
                AnnotationText = a.Annotation,
                From = a.From,
                To = a.To,
                EditAnnotation = Url.Link(nameof(AnnotationController.EditAnnotation), new { AnnotId = a.Annotationid, text = a.Annotation}),
                RemoveAnnotation = Url.Link(nameof(AnnotationController.RemoveAnnotation), new { AnnotId = a.Annotationid })

            }).ToList();

            newMarkingModel.PostTitle = _repository.GetPostById(markedPost.PostId).Title;
            newMarkingModel.MarkedDate = markedPost.MarkingDate;
            newMarkingModel.AddAnnotation = Url.Link(nameof(AnnotationController.AddAnnotation), new { Pid = markedPost.MarkedPostId, text = "NewAnnotation", from = 0, to = 0 });

            return Ok(newMarkingModel);

        }

        // Get All Markings
        [HttpGet("all/{Uid}", Name = nameof(GetMarkings))]
        public IActionResult GetMarkings(int Uid,int page = 0, int pageSize = 8)
        {
            CheckPageSize(ref pageSize);

            var total = _repository.CountMarkings(Uid);
            var totalPages = GetTotalPages(pageSize, total);

            var data = _repository.GetMarkings(Uid, page, pageSize)
                .Select(x => new MarkingModel
                {
                   PostId = x.PostId,
                    MarkingUrl = Url.Link(nameof(GetMarking), new { Pid = x.MarkedPostId }),
                    // Checking whether the post is an answer or question to give it the correct link
                    PostUrl = _repository.GetPostById(x.PostId).PostTypeId == 2 ?
                      Url.Link(nameof(AnswerController.GetAnswerById), new { Qid = _repository.GetPostById(x.PostId).ParentId, Aid = x.MarkedPostId }) :
                      Url.Link(nameof(QuestionController.GetQuestionById), new { Qid = x.PostId }),
                    RemoveMarking = Url.Link(nameof(RemoveMarking), new {Pid =x.PostId }),
                    // Checking whether there's annotation or not
                    MarkingAnnotation = _repository.GetAnnotationsByMarkingId(x.MarkedPostId).ToList().Select(a => new AnnotationModel
                    {
                        MarkingLink = Url.Link(nameof(GetMarking), new { Mid = a.MarkedPostId }),
                        AnnotationText = a.Annotation,
                        From = a.From,
                        To = a.To,
                        EditAnnotation = Url.Link(nameof(AnnotationController.EditAnnotation), new {Pid=a.MarkedPostId, AnnotId = a.Annotationid, text = a.Annotation }),
                        RemoveAnnotation = Url.Link(nameof(AnnotationController.RemoveAnnotation), new { Pid = a.MarkedPostId, AnnotId = a.Annotationid })

                    }).ToList(),





            PostTitle = _repository.GetPostById(x.PostId).Title,
                MarkedDate = x.MarkingDate,
                 AddAnnotation = Url.Link(nameof(AnnotationController.AddAnnotation), new { Pid = x.MarkedPostId, text = "NewAnnotation", from = 0, to = 0 })



        });

            var result = new
            {
                Total = total,
                Pages = totalPages,
                Page = page,
                Prev = Link(nameof(GetMarkings), page, pageSize, -1, () => page > 0),
                Next = Link(nameof(GetMarkings), page, pageSize, 1, () => page < totalPages - 1),
                Url = Link(nameof(GetMarkings), page, pageSize),
                Data = data
            };

            return Ok(result);
        }


        [HttpPost("{Uid}/{Pid}", Name = nameof(AddMarking))]
        public IActionResult AddMarking(int Uid, int Pid)
        {
            _repository.AddMarking(Uid,Pid);
            var markedPost = _repository.GetMarkingById(Uid,Pid);
            var newMarkingModel = new MarkingModel();
            newMarkingModel.MarkingId = markedPost.MarkedPostId;
            newMarkingModel.UserId = markedPost.UserId;
            newMarkingModel.PostId = Pid;
            newMarkingModel.MarkingUrl = Url.Link(nameof(GetMarking), new { Pid = markedPost.MarkedPostId });
            // Checking whether the post is an answer or question to give it the correct link
            newMarkingModel.PostUrl = _repository.GetPostById(markedPost.PostId).PostTypeId == 2 ?
                     Url.Link(nameof(AnswerController.GetAnswerById), new { Qid = _repository.GetPostById(markedPost.PostId).ParentId, Aid = markedPost.PostId }) :
                     Url.Link(nameof(QuestionController.GetQuestionById), new { Qid = markedPost.PostId });
            // Checking whether there's annotation or not
            newMarkingModel.MarkingAnnotation = _repository.GetAnnotationsByMarkingId(markedPost.MarkedPostId).ToList().Select(a => new AnnotationModel
            {
                MarkingLink = Url.Link(nameof(GetMarking), new { Qid = a.MarkedPostId }),
                AnnotationText = a.Annotation,
                From = a.From,
                To = a.To,
                EditAnnotation = Url.Link(nameof(AnnotationController.EditAnnotation), new { AnnotId = a.Annotationid, text = "SampleText" }),
                RemoveAnnotation = Url.Link(nameof(AnnotationController.RemoveAnnotation), new { Qid = a.MarkedPostId })

            }).ToList();
            newMarkingModel.MarkedDate = markedPost.MarkingDate;

            newMarkingModel.AddAnnotation = Url.Link(nameof(AnnotationController.AddAnnotation), new { Pid = markedPost.MarkedPostId, text = "NewAnnotation", from = 0, to = 0 });

            return Created($"api/marking/{markedPost.MarkedPostId}", newMarkingModel);

        }


        [HttpDelete("{Uid}/{Pid}", Name = nameof(RemoveMarking))]
        public IActionResult RemoveMarking(int Uid,int Pid)
        {
           
           var marking =  _repository.RemoveMarking(Uid,Pid);
            if (!marking)
            {
                return NotFound();
            }

            return Ok("The selected marking has been deleted");
       

        }

    }
}
