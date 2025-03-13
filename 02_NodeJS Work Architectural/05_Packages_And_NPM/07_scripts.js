/** 
 * @Scripts
 *  Scripts are a convenient way to define common commands for our
 *  project to build the project, start a development server, compile CSS,
 *  linting etc. Scripts are entered in the command line to perform a specific
 *  action with the same command options. As we saw earlier,scripts are defined
 *  in the scripts object in package.json. To run a script we use npm run script_name.
 * 
 *?  Let’s try adding a script to our project:
 **      1- Navigate to the scripts section in package.json
 **      2- let’s define a script this way to run our node app
 **      3- Save the file. From the terminal type npm run start .
 *          Our application should start just like before with node index.js.
 * 
 *  Start script is a special script that can be run by typing npm start instead of npm run start.
 *  
 *  This is a simple example but, in bigger applications, scripts are more useful if we have more
 *  involved commands with specific options.
*/

const addScripts = {
    //! Just Add This To package.json File
    "scripts": {
        "start": "node index.js"
    }
}