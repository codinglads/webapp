# Snapshot WebApp
A web application for our project in CIS454, it compiles data on specific locations and displays it to users

## Development Environment
To setup your development environment you will need a few things. First you must install Visual Studio, SQL Server, and Node.js. These can be found at the following links
https://nodejs.org/en/download/
https://visualstudio.microsoft.com/downloads/ (Community Edition)
https://www.microsoft.com/en-us/sql-server/sql-server-downloads (Developer Edition)

Now you just need to open Visual Studio and select open project or solution. Then navigate to our project folder and select the WebApp.sln file. It is important that you select the solution file itself.

## Build
To build the project you need open the solution above and add 'DatabaseConnection.txt' file to the Database folder. This file should contain just one line and that line will be your local database connection string.

Then create a SQL Server Database using the following tutorial:
https://docs.microsoft.com/en-us/sql/relational-databases/databases/create-a-database?view=sql-server-ver15

Then you can view the databases connection string by adding the SQL Server connection to visual studio. This can be done using the following tutorial:
https://docs.microsoft.com/en-us/visualstudio/data-tools/add-new-connections?view=vs-2022

Finally, after you've copied/pasted the connection string into the 'DatabaseConnection.txt' file, you can run the WebApp by just clicking on the 'Start' button in Visual Studio.

If you run into any compilation issues, you might need to open powershell, navigate to the 'ClientApp' directory, then run 'npm install'.
