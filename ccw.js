#!/usr/bin/env node

// Create Cubecubed workspace
const inquirer = require("inquirer");
const { exec } = require("child_process");
const { readFileSync, writeFile, existsSync } = require("fs");
const colors = require("colors");

const prompt = () => {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "vite",
                message: "Do you want to install vite to run local server?",
                default: false,
            },
            {
                type: "confirm",
                name: "example",
                message: "Do you want to include the example scene?",
                default: true,
            },
        ])
        .then((answers) => {
            if (answers["vite"]) {
                let raw;

                try {
                    raw = readFileSync("package.json");
                } catch (err) {
                    throw err;
                }

                const json = JSON.parse(raw);
                if (!json.hasOwnProperty("scripts")) json.scripts = {};
                json.scripts.dev = "vite";
                json.scripts.build = "vite build";
                json.scripts.serve = "vite preview";

                const data = JSON.stringify(json, null, 2);
                writeFile("package.json", data, (err) => {
                    if (err) throw err;
                });

                exec("npm i vite", () => console.log("Done.".green));
                console.log(
                    "Tip: Execute `npm run dev` to run a local dev server.".cyan
                );
                console.log("Installing vite...".yellow);
            }

            if (answers["example"]) {
                exec("cp ./node_modules/cubecubed/init/example.js ./");
            }
        });
};

if (!existsSync("package.json")) {
    console.log("package.json file not detected. Creating...".yellow);

    exec("npm init -y", () => {
        console.log("Done.".green);

        prompt();
    });
} else {
    prompt();
}

exec("cp ./node_modules/cubecubed/init/index.html ./");
exec("cp ./node_modules/cubecubed/init/style.css ./");
exec("cp ./node_modules/cubecubed/init/favicon.svg ./");
