const fs = require('fs');

// TODO: ====================== Read File Sync ======================
/**
 * @summary 
 **  readFileSync() 
 *   This method reads file contents synchronously,
 *   blocking the main thread until the operation completes.
 * 
 *    ? The fs.readFileSync() method
 *        It returns the file contents as a buffer containing binary data.
 *    ? The fs.readFileSync() method with encoding parameter
 *        It returns the file contents as a string
*/
const fileContentsSync = fs.readFileSync('./date.txt');
const fileContentsSync2 = fs.readFileSync('./date.txt', 'utf8');

console.log('As Sync Buffer:', fileContentsSync);
console.log('As Sync toString:', fileContentsSync.toString());  // Using toString method
console.log('As Sync String:', fileContentsSync2);              // Using utf8
console.log('========================================================');

// TODO: ====================== Read File Async ======================
/**
 * @summary 
 **  readFile()
 *   This method reads file contents asynchronously,
 *   For asynchronous (non-blocking) file reading, use the fs.readFile method.
 *   It takes the file path and a callback function that executes once the file reading is complete.
*/
fs.readFile('./date.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading the file:', error);
    } else {
        console.log('As Async:', data);
    }
});
