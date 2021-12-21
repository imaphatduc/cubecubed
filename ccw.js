#!/usr/bin/env node

// Create Cubecubed workspace
const inquirer = require("inquirer");
const { exec } = require("child_process");

exec("cp ./node_modules/cubecubed/init/index.html ./");
exec("cp ./node_modules/cubecubed/style.css ./");
exec("cp ./node_modules/cubecubed/graphics/svg/favicon.svg ./");

inquirer
    .prompt([
        {
            type: "confirm",
            name: "example",
            message: "Do you want to include the example scene?",
            default: true,
        },
    ])
    .then((answers) => {
        if (answers["example"]) {
            exec("cp ./node_modules/cubecubed/init/example.js ./");
        }
    });
