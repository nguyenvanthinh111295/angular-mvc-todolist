using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using ToDoList.Data;
using ToDoList.Data.Repositories;

namespace ToDoList.API.Controllers
{                                                                                
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LabelsController : ApiController
    {
        private ILabelRepository _labelRepository;

        public LabelsController()
        {
            _labelRepository = new LabelRepository(new ToDoListContext());
        }
        
        public IEnumerable<Label> GetLabels()
        {
            return _labelRepository.GetLabels();
        }

        [ResponseType(typeof(Label))]
        public IHttpActionResult PostLabel(Label label)
        {
            if (ModelState.IsValid)
            {
                _labelRepository.InsertLabel(label);
            }

            return CreatedAtRoute("DefaultApi", new { label.Id }, label);
        }

        [Route("api/Labels/DeleteLabel/{id:int}")]
        [ResponseType(typeof(Label))]
        public IHttpActionResult DeleteLabel(int id)
        {
            var label = _labelRepository.GetLabelById(id);
            if (label == null)
            {
                return NotFound();
            }

            _labelRepository.DeleteLabel(label);

            return Ok(label);
        }

        [Route("api/Labels/GetLabel/{id:int}")]
        [ResponseType(typeof(Label))]
        public IHttpActionResult GetLabel(int id)
        {
            var label = _labelRepository.GetLabelById(id);
            if (label == null)
            {
                return NotFound();
            }

            return Ok(label);
        }

        [Route("api/Labels/PutLabel/{id:int}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutLabel(int id, Label label)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != label.Id)
            {
                return BadRequest();
            }

            else
            {
                _labelRepository.UpdateLabel(label);
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

    }
}
