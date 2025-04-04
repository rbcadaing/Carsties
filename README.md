# carsties


# View git change log
    1. git log --all --decorate --oneline --graph
    2. create an alias for the command for easier use
        git config --global alias.adog "log --all --decorate --oneline --graph"
        git adog "to run the alias command"


# add ignore file using dotnet cli
    1. dotnet new gitignore


# Create A dotnet project with specific version

    1. Create a global.json file at the root folder containing below
        {
            "sdk": {
                "version": "6.0.100"
            }
        }

# VS Code Extensions
    1. C# Dev Kit by Microsoft
    2. IntelliCode for C# Dev Kit by Microsoft
    3. C# for Visual Studio Code base language support by Microsoft
    4. .NET Install Tool by Microsoft
    5. Material Icon Theme by Philipp Kief
    6. NuGet Gallery by pcislo
    7. PostgreSQL by Chris Kolkman
    8. MongoDB for VS Code by mongodb.com
    9. Tailwind CSS IntelliSense by tailwind Lab
    10. ES7+ React/Redux/React-Native snippets by dsznajder
    11. Auto Close Tag by Jun Han
    12. vscode-proto3 by zxh404


# Create dotnet solution / project
    1. donet new sln
    2. dotnet new webapi -o src/AuctionService
    3. add project to the solution "dotnet sln add src/AuctionService/"
    4. Add Contracts Class Library for mass transit contracts "dotnet new classlib -o src/Contracts"
    5. Add reference to Contracts cd to auction and search service then execute "dotnet add reference ../../src/Contracts"
    6. Istall Identity Server Templates and Create an Identity Service Project
        a. dotnet new install Duende.IdentityServer.Templates
        b. dotnet new isaspid -o src/IdentityService
    7. Add Gateway Service "dotnet new web -o src/GatewayService"
    8. dotnet new webapi -o src/BiddingService -controllers
    9. dotnet new web -o src/NotificationService
    10.
# Create NextJs app
    1. Use Node version v22.14.0
    2. npx create-next-app@latest

# Dotnet EF Tools
    1. check if dotnet ef tools is install "dotnet tool list -g"
    2. install dotnet ef tool "dotnet tool install --global dotnet-ef --version 7.0.20"
    3. Create Migrations `dotnet ef migrations add "initial migration" -o Data/Migrations`
    4. Drop Database "dotnet database drop"

# Automate adding _ in the created class field
    1. create ".editorconfig" file at the root folder'
    2. go to assets folder and copy "editorconfig.txt" content to ".editorconfig" file


# Docker Container
    2. docker build -f src/AuctionService/Dockerfile -t testing123 .