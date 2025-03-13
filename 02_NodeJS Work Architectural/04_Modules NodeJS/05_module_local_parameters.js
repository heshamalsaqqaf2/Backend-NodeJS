/** 
 * @Module_Local_Parameters
 *  As we learned earlier, each module is wrapped in a function wrapper to maintain its scope.
 *  When NodeJS does this behind the scenes, it provides each module with several
 *  parameters accessible from within the module:
 **   1- require:
 *        A function to import other modules using their path.
 *        This is the require keyword we discussed earlier for importing modules into other modules.
 * 
 **   2- module:
 *        An object referencing the current module. We use this object to set its exports
 *        property to export the module (e.g., module.exports = { }).
 * 
 **   3- exports:
 *        A local parameter pointing to the module.exports object. Within the module, we can
 *        set properties of exports the same way we set properties of module.exports. For example:
 * 
 *?     exports.name = "Hesham";
 *?     console.log(module.exports.name);
 * 
 **  __filename:
 *       A string representing the full path to the module file.
 *      Try logging this parameter to the console from any module to see the output.
 * 
 **  __dirname:
 *       A string representing the full path to the module directory. Try logging this
 *       parameter to the console from any module to see the output.
 * 
*/