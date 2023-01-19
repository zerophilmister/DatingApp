using API.Extensions;
using API.Middleware;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationServices(builder.Configuration);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddIdentityServices(builder.Configuration);



var app = builder.Build();

app.UseHttpsRedirection();

//configure middleware exception handling
app.UseMiddleware<ExceptionMiddleware>();

//allow cors
app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:4200"));

//middleware
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
