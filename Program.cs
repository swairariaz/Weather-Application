var builder = WebApplication.CreateBuilder(args);

// Add services to the container if needed
builder.Services.AddControllersWithViews(); // This is optional if you're using MVC

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles(); // This line enables static file serving

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Serve the default file (index.html)
app.UseDefaultFiles();

app.Run();
