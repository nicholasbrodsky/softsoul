namespace API.Entities
{
    public class SoftSoulProgram
    {
        public Guid Id { get; set; }
        public string Type { get; set; }
        public int Price { get; set; }
        public int Count { get; set; }
        public int Length { get; set; }
        public string Description { get; set; }

        public List<Appointment> Appointments { get; set; }
    }
}