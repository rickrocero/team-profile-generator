const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const addEmployeeCard = (team) => {
    const teamArray = team.map((employee) => {
        switch(employee.role) {
            case "Manager":
                return `
                    <div id="manager" class="card-content">
                        <h3>${employee.name}</h3>
                        <h3>${employee.role}</h3>
                        <p>ID: ${employee.id}</p>
                        <p>Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
                        <p>Office number: ${employee.officeNumber}</p>
                    </div>
                `;
            case "Engineer":
                return `
                    <div id="engineer" class="card-content">
                        <h3>${employee.name}</h3>
                        <h3>${employee.role}</h3>
                        <p>ID: ${employee.id}</p>
                        <p>Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
                        <p>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></p>
                    </div>
                `;
            case "Intern":
                return `
                    <div id="intern" class="card-content">
                        <h3>${employee.name}</h3>
                        <h3>${employee.role}</h3>
                        <p>ID: ${employee.id}</p>
                        <p>Email: <a href="mailto: ${employee.email}" target="_blank">${employee.email}</a></p>
                        <p>School: ${employee.school}</p>
                    </div>
                `;
        }
    })


    // console.log("***********",teamArray);

const generateTeamHtml = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <link rel="stylesheet" href="./dist/styles.css">        
    <title>My Team</title>
</head>
<body>
    <header class="nav-wrapper">
        <h1 class="brand-logo center">My Team</h1>
    </header>
    <main id="team-container">
        ${teamArray.join("")}
    </main>
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>
</html>
    `;
return generateTeamHtml;
};

module.exports = addEmployeeCard