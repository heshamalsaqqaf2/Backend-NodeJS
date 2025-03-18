/**
 * @summary
 *!  readFile() => readfile using FS Promise Module
 *   This method reads file contents asynchronously,
 *   For asynchronous (non-blocking) file reading, use the fs.readFile method.
 *   It takes the file path and a callback function that executes once the file reading is complete.
*/

// Todo: 1- Import the node:fs/promises module:
const fs = require('node:fs/promises');

// Todo: 2- Use the fs.readFile method to read the file:
fs.readFile('./file.txt', 'utf8')
    .then(data => console.log('Using Promise:', data))
    .catch(error => console.error('Error reading the sync file:', error));

// Todo: Here's the same code using async/await:
async function readFile() {
    try {
        const data = await fs.readFile('./file.txt', 'utf8');
        console.log('Using Await:', data);
    } catch (error) {
        console.error('Error reading the sync file:', error);
    }
}
readFile();
