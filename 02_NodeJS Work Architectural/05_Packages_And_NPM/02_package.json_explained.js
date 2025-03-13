/** 
 * @package_json_Explained
 *  For NPM to work it needs a configuration file that it can use to store information and metadata
 *  about our project and packages that our project uses. This is where package.json comes into
 *  play. It is a json file that store important metadata about the project and manages its
 *  dependencies. Let’s go over few examples to see what information does package.json holds.
 **    1- Project Metadata: 
 *          - Information like the project's name, version, description, and entry point (e.g., main file).
 * 
 **    2- Dependencies: 
 *          - TLists the external packages (libraries) installed via npm that the project relies on.
 *          - These packages are installed using the npm install command without the --save-dev flag.
 * 
 **    3- Dev Dependencies: 
 *          - Similar to dependencies, but specifically for packages needed only during development
 *            (e.g., testing tools, linters).
 *          - These packages are installed using the npm install --save-dev command or
 *            its shorthand npm install -D.
 * 
 **    4- Scripts: 
            - Defines a set of commands that can be executed via the npm run <command>.
 *            These scripts can be used to automate various tasks such as building, testing,
 *            and deploying the application.
 * 
 **    5- Other Configurations:
            - Includes configurations for tools like Babel, ESLint, or project-specific settings.
*/

const metadata = {
    "name": "my-project",
    "version": "1.0.0",
    "description": "A simple Node.js project",
    "main": "index.js"
}

const dependencies = {
    "dependencies": {
        "express": "^4.17.1"
    }
}

const devDependencies = {
    "devDependencies": {
        "eslint": "^7.32.0"
    }
}

const Scripts = {
    "scripts": {
        "start": "node index.js",
        "test": "mocha"
    }
}

const otherConfigurations = {
    "eslintConfig": {
        "env": {
            "browser": true,
            "node": true
        },
        "extends": "eslint:recommended",
        "rules": {
            "no-console": "off"
        }
    }
}