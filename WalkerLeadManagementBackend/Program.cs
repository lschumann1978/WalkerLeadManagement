using Microsoft.EntityFrameworkCore;
using WalkerLeadManagement.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Register in-memory database
builder.Services.AddDbContext<LeadContext>(opt => opt.UseInMemoryDatabase("LeadsDb"));

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

// Enable CORS globally
app.UseCors("AllowAngularApp");

// Enable Swagger only in Development mode
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Walker Lead Management API v1");
        options.RoutePrefix = string.Empty;
    });
}

// Middleware Pipeline
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
