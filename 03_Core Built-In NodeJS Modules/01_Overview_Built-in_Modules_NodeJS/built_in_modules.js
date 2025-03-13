/** 
 * @Overview_Built_In_Modules_In_NodeJS
 *  Built-in modules are an integral part of NodeJS, providing essential
 *  functionality right out of the box. These modules are automatically available
 *  for use as soon as NodeJS is installed on your system, eliminating the need
 *  for additional external packages. They serve as the foundation for many NodeJS
 *  applications and offer a wide range of capabilities.
 * 
 *  In this module, we will explore several key built-in modules that are
 *  particularly valuable for backend development.
 * 
 *? These modules include:
 **   - File System (fs): provides functionalities for reading from and writing to files
 **   - Stream: provides a way to handle reading and writing data in chunks, enabling efficient processing of large amounts of data
 **   - Path: provides useful methods for working with file and directory paths
 **   - Events: used for handling and emitting events
 **   - Crypto: provides cryptographic functionality
 **   - Timer: used for scheduling and executing code after a specified delay or at regular intervals
 *
 *  By leveraging these built-in modules, we can efficiently create backend applications
 *  without relying on external dependencies.
 * 
 *? Importing built-in modules
 *   To import a built-in Node module, we use the same syntax as local modules,but without the //Todo [ ./ prefix ].
 *   We can optionally add //Todo (node:) 
 *   before the module name to indicate it's a Node built-in module,
 *   enhancing readability. Here is how to import the path built-in module:
 * 
*/

const path = require('node:path');
console.log(path);