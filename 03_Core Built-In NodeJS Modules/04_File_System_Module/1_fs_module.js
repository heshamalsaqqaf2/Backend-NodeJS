const fs = require('fs');

// TODO: ======================= Read File Sync && Read File Async =======================
// Read File Sync
/**
 * @summary Read File Sync
 *!  readFileSync() 
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
console.log('As Sync Buffer Read File:', fileContentsSync);
console.log('As Sync toString Read File:', fileContentsSync.toString());  // Using toString method
console.log('As Sync String Read File:', fileContentsSync2);              // Using utf8
console.log('========================================================');

// Read File Async
/**
 * @summary Read File Async
 *!  readFile()
 *   This method reads file contents asynchronously,
 *   For asynchronous (non-blocking) file reading, use the fs.readFile method.
 *   It takes the file path and a callback function that executes once the file reading is complete.
*/
fs.readFile('./date.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading the sync file:', error);
    } else {
        console.log('As Async Read File:', data);
    }
});

// TODO: ======================= Write File Sync && Write File Async =======================
// Write File Sync
/**
 * @summary
 *!  writeFileSync()
 *   Another popular method in the fs module used for writing data to a file. This method writes data to
 *   a file synchronously, blocking the thread until the write operation is complete.
*/
fs.writeFileSync('./dateWrite.txt', 'This is a new data using Sync.');
console.log('File has been written using Sync');

// Write File Async
/**
 * @summary
 *!  writeFile()
 *   The writeFile method accomplishes the same task without blocking the main thread.
 *   Any code following it will continue executing without waiting for the file write operation to finish.
 *   Once the operation is done, the callback function passed to the method will be executed, where you
 *   can handle any errors or perform post-write actions.
*/
fs.writeFile('./dateWrite.txt', 'This is a new data using Async.', (error) => {
    if (error) {
        console.error('Error writing the file using Async:', error);
    } else {
        console.log('File has been written using Async');
    }
});

// TODO: ======================= Append File =======================
/**
 * @summary
 *!  appendFile()
 *   Appends data to a file without blocking the main thread.
 *   The callback function executes after the append operation is complete.
 *   You can handle any errors inside the callback, which receives an error
 *   object if something goes wrong, or null if the operation succeeds.
*/
fs.appendFile('./dateWrite.txt', 'This is a new data using Append Async.', (error) => {
    if (error) {
        console.error('Error writing the file using Append Async:', error);
    } else {
        console.log('File has been appended using Append Async');
    }
});

// TODO: ======================= Unlink File =======================
/**
 * @summary
 *!  unlink()
 *   Used to delete a file. You can use either unlinkSync or unlink method.
 *   This method remove a file from the filesystem.
 *   The callback function is called after the file has been deleted.
 *   If an issue occurs (e.g., the file doesn't exist),
 *   the error object will contain the relevant information.
*/
fs.unlink('./dateWrite2.txt', (error) => {
    if (error) {
        console.error('Error deleting the file:', error);
    } else {
        console.log('File has been deleted');
    }
});

// TODO: ======================= mkdir Folder =======================
/**
 * @summary
 *!  mkdir()
 *   The mkdir method creates a folder in the file system.
 *   The callback function is called after the folder has been created.
 *   If an issue occurs (e.g., the folder already exists),
 *   the error object will contain the relevant information.
*/
fs.mkdir('./newFolder', (error) => {
    if (error) {
        console.error('Error creating the folder:', error);
    } else {
        console.log('Folder has been created');
    }
});

// TODO: ======================= readdir Folder =======================
/**
 * @summary
 *!  readdir()
 *   The readdir method reads the contents of a directory.
 *   The callback function is called after the directory has been read.
 *   If an issue occurs (e.g., the directory doesn't exist),
 *   the error object will contain the relevant information.
*/
fs.readdir('../04_File_System_Module', (error, files) => {
    if (error) {
        console.error('Error reading the folder:', error);
    } else {
        console.log('Folder contents:', files);
    }
});