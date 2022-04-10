#!/usr/bin/env node

const { readFileSync, writeFile, existsSync } = require("fs");
const { exec, execSync } = require("child_process");
const inquirer = require("inquirer");

const repo = "https://github.com/imaphatduc/cubecubed.git";
const project = "cubecubed";

const initFolder = `${project}/init`;
const assetsFolder = `${project}/assets`;

/**
 * Example prop object:
 *
 * prop = {
 *   key: "scripts",
 *   value: {
 *     dev: "vite",
 *     build: "vite build",
 *     serve: "vite preview"
 *   }
 * }
 */
const writePackageJson = (raw, prop) => {
    const json = JSON.parse(raw);

    if (!json.hasOwnProperty(prop)) json[`${prop.key}`] = {};

    json[`${prop.key}`] = {
        ...json[`${prop.key}`],
        ...prop.value,
    };

    const data = JSON.stringify(json, null, 2);

    writeFile("package.json", data, (err) => {
        if (err) throw err;
    });
};

/**
 * Clone Cubecubed repo.
 */
const clone = () => {
    console.log("Initializing Cubecubed workspace...");

    exec(`git clone --depth 1 ${repo}`, () => {
        execSync(`cp ${assetsFolder}/svg/favicon.svg ./`);
        execSync(`cp ${initFolder}/index.html ./`);
        execSync(`cp ${project}/style.css ./`);
        execSync(`cp ${initFolder}/example.js ./`);

        execSync(`rm -rf ${project}`);
    });
};

const prompt = () => {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "vite",
                message: "Do you want to install vite to run local server?",
                default: true,
            },
        ])
        .then((answers) => {
            exec(`npm i ${project}`);

            let raw;

            try {
                raw = readFileSync("package.json");
            } catch (err) {
                throw err;
            }

            clone();

            if (answers["vite"]) {
                console.log("Installing vite...");

                exec("npm i vite", () => {
                    writePackageJson(raw, {
                        key: "scripts",
                        value: {
                            dev: "vite",
                            build: "vite build",
                            serve: "vite preview",
                        },
                    });
                });

                console.log(
                    "Tip: Execute `npm run dev` to run a local dev server."
                );
            }
        });
};

function init() {
    if (!existsSync("package.json")) {
        console.log("package.json file not detected. Creating...");

        exec("npm init -y", () => {
            prompt();
        });
    } else {
        prompt();
    }
}

init();
