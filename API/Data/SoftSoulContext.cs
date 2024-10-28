using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class SoftSoulContext(DbContextOptions options) : DbContext(options)
    {
        public DbSet<Appointment> Appointments { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<SoftSoulProgram> SoftSoulPrograms { get; set; }
    }
}