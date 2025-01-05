using Microsoft.EntityFrameworkCore;

namespace WalkerLeadManagement.Models
{
    public class LeadContext : DbContext
    {
        public LeadContext(DbContextOptions<LeadContext> options) : base(options) { }

        public required DbSet<Lead> Leads { get; set; }
    }
}
