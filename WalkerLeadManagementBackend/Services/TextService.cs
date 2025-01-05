namespace WalkerLeadManagement.Services
{
    public class TextService
    {
        public void SendText(string phoneNumber, string message)
        {
            Console.WriteLine($"Text sent to {phoneNumber}: {message}");
        }
    }
}
