/** 
 * @Module_Local_Parameters
 *  As we learned earlier, each module is wrapped in a function wrapper to maintain its scope.
 *  When NodeJS does this behind the scenes, it provides each module with several
 *  parameters accessible from within the module:
 **   1- require:
 *        A function to import other modules using their path.
 *        This is the require keyword we discussed earlier for importing modules into other modules.
 **   2- module:
 *        An object referencing the current module. We use this object to set its exports
 *        property to export the module (e.g., module.exports = { }).
 **   3- exports:
 *        A local parameter pointing to the module.exports object. Within the module, we can
 *        set properties of exports the same way we set properties of module.exports. For example:
 * 
 *!   - CommonJS Modules
 *          exports.name = "Hesham";
 *
 *?   - Es Modules
 *          export const name = "Hesham";
 * 
 **  __filename:
 *       A string representing the full path to the module file.
 *      Try logging this parameter to the console from any module to see the output.
 **  __dirname:
 *       A string representing the full path to the module directory. Try logging this
 *       parameter to the console from any module to see the output.
 * 
*/

'use strict';

//? Named Export => Property
export const name = "Hesham1";
console.log(name);

//? Default Export
const name2 = "Hesham2";
export default name2;
console.log(name2);

//! commonJS.cjs
// exports.name = "Hesham";
// console.log(module.exports.name); // "Hesham"

// TODO: ================ Using CommonJS Modules ================
// console.log('CommonJS:', __filename); //? Full path of the current file
// console.log('CommonJS:', __dirname);  //? Full path to the current folder

// TODO: ================ Using ES Modules ================
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('ES:', __filename); //? Full path of the current file
console.log('ES:', __dirname);  //? Full path to the current folder