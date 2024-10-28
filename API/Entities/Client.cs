namespace API.Entities
{
    public class Client
    {
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Status { get; set; }

        public Guid SoftSoulProgramId { get; set; }
        public SoftSoulProgram SoftSoulProgram { get; set; }

        public List<Appointment> Appointments { get; set; }
    }
}