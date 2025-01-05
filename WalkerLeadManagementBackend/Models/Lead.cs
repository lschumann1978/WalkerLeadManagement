namespace WalkerLeadManagement.Models
{
    public class Lead
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ZipCode { get; set; }
        public string? Email { get; set; }
        public bool IsEmailPermitted { get; set; }
        public bool IsTextPermitted { get; set; }
    }
}
