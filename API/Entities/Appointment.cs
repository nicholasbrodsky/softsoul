namespace API.Entities
{
    public class Appointment
    {
        public Guid Id { get; set; }
        public DateTime DateAndTime { get; set; }
        public string Status { get; set; }

        // foreign keys
        public Guid SoftSoulProgramId { get; set; }
        public SoftSoulProgram SoftSoulProgram { get; set; }

        public Guid ClientId { get; set; }
        public Client Client { get; set; }
    }
}