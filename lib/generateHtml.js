const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const addEmployeeCard = (team) => {
    const teamArray = team.map((employee) => {
        switch(employee.role) {
            case "Manager":
                return `
                    <div id="manager">
                        <h3>${data.managerName}</h3>
                        <h3>${data.manager.getRole()}</h3>
                        <p>ID: ${data.managerId}</p>
                        <p>Email: ${data.managerEmail}</p>
                        <p>Office number: ${data.managerOfficeNum}</p>
                    </div>
                `;
            case "Engineer":
                return `
                    <div id="engineer">
                        <h3>${data.engineerName}</h3>
                        <h3>${data.engineer.getRole()}</h3>
                        <p>ID: ${data.engineerId}</p>
                        <p>Email: ${data.engineerEmail}</p>
                        <p>GitHub: ${data.engineerGithub}</p>
                    </div>
                `;
        }
    })

    }

function generateHtml(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <main id="team-container">
        <div id="manager">
            <h3>${data.managerName}</h3>
          
            <p>ID: ${data.managerId}</p>
            <p>Email: ${data.managerEmail}</p>
            <p>Office number: ${data.managerOfficeNum}</p>
        </div>
        <div id="engineer">
            <h3>${data.engineerName}</h3>
           
            <p>ID: ${data.engineerId}</p>
            <p>Email: ${data.engineerEmail}</p>
            <p>GitHub: ${data.engineerGithub}</p>
        </div>
        <div id="intern">
            <h3>${data.internName}</h3>
            
            <p>ID: ${data.internId}</p>
            <p>Email: ${data.internEmail}</p>
            <p>School: ${data.internSchool}</p>
        </div>
    </main>
</body>
</html>
    `;
}

module.exports = generateHtml