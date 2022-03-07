using WebApp.Database;

#region Database Building

using (Database db = new Database())
{
    db.InitializeTables();
    db.BuildTables();
}

#endregion

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
/* these were for testing login and sign up we can delete them if we need to
//calling function these are class/file name
Login_signup check = new Login_signup();
//this is method name
//check.CheckCredentials();

Login_signup makeAccount = new Login_signup();
makeAccount.signUp();
*/
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;

app.Run();
