# Walker Lead Management Project

## Prerequisites

These steps assume you have Visual Studio Code

### For the backend project

- .Net SDK - Download from [dotnet.microsoft.com](https://dotnet.microsoft.com/en-us/download).

- Code Editor: Install Visual Studio Code from [code.visualstudio.com](https://code.visualstudio.com/).
  - Install the C# Dev Kit extension for better backend development support.

### For the frontend project

- Download and install from [nodejs.org](https://nodejs.org/) if it's not already installed.

- Install the frontend app

```
  npm install -g @angular/cli
```

### When finished seting up the projects

### Running the 'WalkerLeadManagementBackend' project

In a terminal window navigate to the backend project folder:

```
cd WalkerLeadManagementBackend
```

Then run:

```
dotnet run
```

### Running the 'WalkerLeadManagementFrontend' project

In a seperate terminal window navigate to the frontend project folder:

```
    cd WalkerLeadManagementUI
```

Then run:

```
ng serve --open
```

This should open the browser to the dashboard page

### How to use:

When the page loads you'll see an empty list of Leads and an "Add New Lead" button

- To add new lead, click on the "Add New Lead" button.
  - This will bring up the new Lead form. Fill it out and click "Save"
  - This will navigate back to the dashboard and the lead will be displayed there
  - Do this several times to see more than one lead in the list
