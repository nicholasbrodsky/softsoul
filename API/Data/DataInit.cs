using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public static class DataInit
    {
        public static async void Initialize(SoftSoulContext context)
        {
            if (!await context.SoftSoulPrograms.AnyAsync())
            {
                var softSoulPrograms = new List<SoftSoulProgram>
                {
                    new SoftSoulProgram
                    {
                        Id = Guid.NewGuid(),
                        Count = 12,
                        Length = 60,
                        Price = 2000,
                        Type = "Wellness Package",
                        Description = "This is a quick description text filler until something else is provided",
                    },
                    new SoftSoulProgram
                    {
                        Id = Guid.NewGuid(),
                        Count = 6,
                        Length = 60,
                        Price = 2000,
                        Type = "Wellness Coaching",
                        Description = "This is a quick description text filler until something else is provided",
                    },
                    new SoftSoulProgram
                    {
                        Id = Guid.NewGuid(),
                        Count = 3,
                        Length = 60,
                        Price = 2000,
                        Type = "Clarity Sessions",
                        Description = "This is a quick description text filler until something else is provided",
                    },
                    new SoftSoulProgram
                    {
                        Id = Guid.NewGuid(),
                        Count = 3,
                        Length = 30,
                        Price = 2000,
                        Type = "Breath Work",
                        Description = "This is a quick description text filler until something else is provided",
                    },
                    new SoftSoulProgram
                    {
                        Id = Guid.NewGuid(),
                        Count = 1,
                        Length = 60,
                        Price = 2000,
                        Type = "Initial Assessment",
                        Description = "This is a quick description text filler until something else is provided",
                    },
                };
                await context.SoftSoulPrograms.AddRangeAsync(softSoulPrograms);
                await context.SaveChangesAsync();
            }

            if (!context.Appointments.Any())
            {
                var appointments = new List<Appointment>
                {
                    new Appointment
                    {
                        Id = Guid.NewGuid(),
                        DateAndTime = DateTime.Now.AddDays(21),
                        Status = "Booked"
                    },
                };
                context.Appointments.AddRange(appointments);
                context.SaveChanges();
            }

            if (!context.Clients.Any())
            {
                var clients = new List<Client>
                {
                    new Client
                    {
                        Id = Guid.NewGuid(),
                        FirstName = "Jenny",
                        LastName = "Brodsky",
                        DateOfBirth = new DateTime(1993, 6, 15),
                        Email = "hoslerjenny@gmail.com",
                        Phone = 6616002200,
                        Status = "active"
                    },
                };
                context.Clients.AddRange(clients);
                context.SaveChanges();
            }
        }
    }
}