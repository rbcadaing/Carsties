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
    2. 