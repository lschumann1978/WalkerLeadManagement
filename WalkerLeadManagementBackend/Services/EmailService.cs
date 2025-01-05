namespace WalkerLeadManagement.Services
{
    public class EmailService
    {
        public void SendEmail(string email, string subject, string body)
        {
            Console.WriteLine($"Email sent to {email}: {subject} - {body}");
        }
    }
}
