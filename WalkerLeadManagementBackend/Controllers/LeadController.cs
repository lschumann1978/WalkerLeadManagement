using Microsoft.AspNetCore.Mvc;
using WalkerLeadManagement.Models;

namespace WalkerLeadManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LeadsController : ControllerBase
    {
        private readonly LeadContext _context;

        public LeadsController(LeadContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Get a list of all leads
        /// </summary>
        /// <returns>List<Lead></returns>
        [HttpGet]
        public IActionResult GetAllLeads()
        {
            var leads = _context.Leads.ToList();
            return Ok(leads);
        }

        /// <summary>
        /// Get a single lead by id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Lead Object</returns>
        [HttpGet("{id}")]
        public IActionResult GetLead(int id)
        {
            var lead = _context.Leads.Find(id);
            if (lead == null)
            {
                return NotFound($"Lead with ID {id} not found.");
            }
            return Ok(lead);
        }

        /// <summary>
        /// Creates a new lead from data in the request body
        /// </summary>
        /// <param name="leads"></param>
        /// <returns></returns>
        [HttpPost]
        [Route("add")]
        public IActionResult AddLeads([FromBody] List<Lead> leads)
        {
            if (leads == null || leads.Count == 0)
            {
                return BadRequest("Lead data is invalid.");
            }

            leads.ForEach(lead => AddLead(lead));

            return CreatedAtAction(nameof(AddLeads), leads);
        }

        private object AddLead(Lead lead)
        {
            // Get the next ID
            var lastLead = _context.Leads.OrderByDescending(l => l.Id).FirstOrDefault();
            lead.Id = (lastLead != null) ? lastLead.Id + 1 : 1; // Start from 1 if no leads exist

            _context.Leads.Add(lead);
            _context.SaveChanges();

            if (lead.IsEmailPermitted && !string.IsNullOrEmpty(lead.Email))
            {
                Console.WriteLine($"Email sent to {lead.Email}: Thank you for your submission.");
            }

            if (lead.IsTextPermitted)
            {
                Console.WriteLine($"Text sent to {lead.PhoneNumber}: Thank you for your submission.");
            }

            return new { id = lead.Id, lead };
        }
    }
}
