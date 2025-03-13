/** 
 * @Install_Packages_With_NPM
 *  Here some other useful commands to install packages with NPM:
 *      npm i --save-dev nodemon: install nodemon to devDependencies
 *      npm i: installs all the dependencies and devDependencies from package.json
 *      npm i --production: installs only dependencies
 *      npm i -g typescript: installs typescript globally
 *      npm uninstall package-name or npm un package-name: removes a package
*/

'use strict';

const convert = require("convert-units");

const volInLiters = 1;
const volInMl = convert(volInLiters).from("l").to("ml");
console.log(volInMl);
