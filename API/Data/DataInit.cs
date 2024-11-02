using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public static class DataInit
    {
        public static async Task InitializeAsync(SoftSoulContext context)
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

            if (!await context.Clients.AnyAsync())
            {
                var clients = new List<Client>
                {
                    new Client
                    {
                        Id = Guid.NewGuid(),
                        FirstName = "Nicholas",
                        LastName = "Brodsky",
                        DateOfBirth = new DateTime(1993, 6, 15),
                        Email = "nicholasbrodsky@yahoo.com",
                        Phone = 6619932896,
                        Status = "active",
                        SoftSoulProgramId = context.SoftSoulPrograms.First(x => x.Type == "Initial Assessment").Id
                    },
                };
                await context.Clients.AddRangeAsync(clients);
                await context.SaveChangesAsync();
            }

            if (!await context.Appointments.AnyAsync())
            {
                var appointments = new List<Appointment>
                {
                    new Appointment
                    {
                        Id = Guid.NewGuid(),
                        DateAndTime = DateTime.Now.AddDays(21),
                        Status = "Booked",
                        ClientId = context.Clients.First(x => x.Email == "nicholasbrodsky@yahoo.com").Id,
                        SoftSoulProgramId = context.SoftSoulPrograms.First(x => x.Type == "Initial Assessment").Id
                    },
                };
                await context.Appointments.AddRangeAsync(appointments);
                await context.SaveChangesAsync();
            }
        }
    }
}