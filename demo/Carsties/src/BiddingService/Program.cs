using BiddingService.Consumers;
using BiddingService.Services;
using MassTransit;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.JsonWebTokens;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using MongoDB.Entities;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddMassTransit(x =>
{

    x.AddConsumersFromNamespaceContaining<AuctionCreatedConsumer>();
    x.SetEndpointNameFormatter(new KebabCaseEndpointNameFormatter("bids", false));

    x.UsingRabbitMq((context, cfg) =>
    {
        cfg.Host(builder.Configuration["RabbitMq:Host"], "/", host =>
        {
            host.Username(builder.Configuration.GetValue("RabbitMq:Username", "guest"));
            host.Password(builder.Configuration.GetValue("RabbitMq:Password", "guest"));
        });
        cfg.ConfigureEndpoints(context);
    });
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        // SecurityKey key = new SymmetricSecurityKey(System.Text.Encoding.ASCII.GetBytes("NotASecret"));
        options.Authority = builder.Configuration["IdentityServiceUrl"];
        // Turn off for http protocol use
        options.RequireHttpsMetadata = false;
        options.TokenValidationParameters.ValidateAudience = false;
        options.TokenValidationParameters.NameClaimType = "username";
        options.TokenValidationParameters.ValidIssuer = "identity-svc";
        options.TokenValidationParameters.ValidateIssuerSigningKey = false;
        options.TokenValidationParameters.SignatureValidator = (string token, TokenValidationParameters parameters) =>
        {
            var jwt = new JsonWebToken(token);

            return jwt;
        };
    });

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddHostedService<CheckAuctionFinished>();
builder.Services.AddScoped<GrpcAuctionClient>();

var app = builder.Build();

app.UseAuthorization();

app.MapControllers();

await DB.InitAsync("BidDb", MongoClientSettings.FromConnectionString(builder.Configuration.GetConnectionString("BidDbConnection")));

app.Run();
