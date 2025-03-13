/** 
 * @Module_Scope
 *  It's important to note that every module has its own scope. This means that when we import
 *  different modules into a file, we don't have to worry about conflicting variables or functions, as
 *  each module maintains its own scope. NodeJS achieves this by wrapping each module in an
 *  Immediately Invoked Function Expression //? (IIFE)
 *  To better understand how this works in a practical way,
 *  follow these next steps: Look Code
 * 
 * @summary
 *  This is how NodeJS handles modules //! under the hood,
 *  ensuring that each module's code is scoped to itself.
*/

'use strict';

(function () {
    const firstName = "Hesham";
    console.log(firstName);
})();

(function () {
    const firstName = "Zohir";
    console.log(firstName);
})();