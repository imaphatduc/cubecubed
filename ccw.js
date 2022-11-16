#!/usr/bin/env node

const { readFileSync, writeFile, existsSync, mkdirSync } = require("fs");
const { exec, execSync } = require("child_process");
const path = require("path");
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
            execSync(`npm i ${project}`);

            clone();

            if (answers["vite"]) {
                console.log("Installing vite...");

                exec("npm i -D vite", () => {
                    const raw = readFileSync("package.json").toString();
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
    if (process.argv.length < 3) {
        console.log("Please provide a project name.");
        console.log("Example:");
        console.log("   npx ccw my-workspace");
        console.log("or");
        console.log("   npx cubecubed my-workspace");

        process.exit(1);
    }

    const projectName = process.argv[2];
    const currentPath = process.cwd();

    const projectPath = path.join(currentPath, projectName);

    try {
        mkdirSync(projectPath);
    } catch (err) {
        if (err.code === "EEXIST") {
            console.log(
                `The file ${projectName} already exist in the current directory, please give it another name.`
            );
        } else {
            console.log(error);
        }

        process.exit(1);
    }

    process.chdir(projectPath);

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
