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

Steps to test:

- Got to your browser and navigate to `http://localhost:5010/index.html'. This will open the Swagger page for the API
- Click the bar that says "POST"
- Click on "Try it out"
- Enter several leads using the format shown below, and leave one of the email fields empty
  - The response should show the leads that have been created along with their new ids.
  - Look at the console window running the API to see the message indicating an email or text message has been sent for each lead.

```
[
  {
    "id": 0,
    "name": "A Name",
    "phoneNumber": "123-45-6789",
    "zipCode": "55555",
    "email": "some.email@email.com",
    "isEmailPermitted": true,
    "isTextPermitted": false
  },
  {
    "id": 0,
    "name": "string",
    "phoneNumber": "987-65-4321",
    "zipCode": "55556",
    "email": "",
    "isEmailPermitted": false,
    "isTextPermitted": true
  }
]
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

When the page loads you'll see an empty list of Leads and the message "No leads yet"

- Observe the list of leads you've added through the API, click on each one to view the details
