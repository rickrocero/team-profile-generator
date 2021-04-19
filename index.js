const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./lib/generateHtml");

const team = [];

function addManager() {
    inquirer.prompt([
        {
            name: "managerName",
            type: "input",
            message: "What is your team manager's name?"
        },
        {
            name: "managerId",
            type: "input",
            message: "What is your team manager's id?"
        },
        {
            name: "managerEmail",
            type: "input",
            message: "What is your team manager's email?"           
        },
        {
            name: "managerOfficeNum",
            type: "input",
            message: "What is your team manager's office number?"
        }
    ]).then(({managerName, managerId, managerEmail, managerOfficeNum}) => {
        console.log(managerName, managerId, managerEmail, managerOfficeNum);
        const managerObj = new Manager(managerName, managerId, managerEmail, managerOfficeNum);
        // console.log(managerObj);
        // fs.writeFile("team.html", generateHtml({managerName, managerId, managerEmail, managerOfficeNum}), (err) => {
        //     if (err) {
        //         throw err;
        //     } else {
        //         console.log("HTML generated!")
        //     }
        // })
        team.push(managerObj);
        console.log(team);
        addTeamMember();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "What is your engineer's name?"
        },
        {
            name: "engineerId",
            type: "input",
            message: "What is your engineer's id?"
        },
        {
            name: "engineerEmail",
            type: "input",
            message: "What is your engineer's email?"           
        },
        {
            name: "engineerGithub",
            type: "input",
            message: "What is your engineer's Github username?"
        }
    ]).then(({engineerName, engineerId, engineerEmail, engineerGithub}) => {
        console.log(engineerName, engineerId, engineerEmail, engineerGithub);
        const engineerObj = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        console.log(engineerObj);
        // fs.writeFile("team.html", `${engineerName, engineerId, engineerEmail, engineerGithub}`, (err) => {
        //     if (err) {
        //         throw err;
        //     } else {
        //         console.log("HTML updated!")
        //     }
        // })
        team.push(engineerObj);
        console.log(team);
        addTeamMember();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "What is your intern's name?"
        },
        {
            name: "internId",
            type: "input",
            message: "What is your intern's id?"
        },
        {
            name: "internEmail",
            type: "input",
            message: "What is your intern's email?"           
        },
        {
            name: "internSchool",
            type: "input",
            message: "What is your intern's school?"
        }
    ]).then(({internName, internId, internEmail, internSchool}) => {
        console.log(internName, internId, internEmail, internSchool);
        const internObj = new Intern(internName, internId, internEmail, internSchool);
        console.log(internObj);
        team.push(internObj);
        console.log(team);
        addTeamMember();
    })
}

function addTeamMember() {
    inquirer.prompt([
        {
            name: "team",
            type: "list",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]).then(answers => {
        switch(answers.team) {
            case "Engineer":
                addEngineer()
                break;
            case "Intern":
                addIntern()
                break;
            case "I don't want to add any more team members":
                console.log("I've added all my team members")
                generateHtml();
                break;
        }
    })
}

addManager()