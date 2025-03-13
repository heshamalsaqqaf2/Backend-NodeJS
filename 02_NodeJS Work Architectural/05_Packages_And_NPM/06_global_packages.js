/** 
 * @Global_Packages
 *  When installing NPM packages we have the option to install it locally within our project,
 *  or globally on our machine. Some packages on NPM are meant to be used as standalone command
 *  line applications not as a local dependency, they are typically utilities and tools written
 *  in node that can help us in development. For example //? create-react-app 
 *  that is used to create a react application. Another popular example for NodeJS is //? nodemon.
 *  This package is very helpful when developing Node applications as it automatically restarts
 *  the node app when file changes in the directory are detected. Nodemon is meant to be used from the
 *  terminal rather than a local dependency. To install, we use //? npm install -g nodemon.
 *  This will install nodemon globally to the system path allowing us to run the package from the command line.
 *  To use nodemon we enter the following to our terminal //? nodemon index.js.
 *  This will launch nodemon on the terminal. Now try to make a change to the index.js
 *  file and save. Nodemon will detect the change and restart the application.
 * 
 *  It is important to note that global packages will not be installed when we
 *  run npm install in our project, as they are not part on the dependencies object in //* package.json.
 *  So global packages should be installed individually on every machine.To uninstall
 *  a global package we use //* npm uninstall -g package_name
 * 
*/
