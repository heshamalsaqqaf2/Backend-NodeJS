const path = require('node:path');

console.log('======================Path Folder And File======================');
console.log('File Path:', __filename);
console.log('Folder Path:', __dirname);

console.log('======================Base Name======================');
// Returns the last part of the path (file or folder name).
console.log('File Name:', path.basename(__filename));
console.log('Folder Name:', path.basename(__dirname));

console.log('======================Extension======================');
console.log('File Extension:', path.extname(__filename));   // '.js'
console.log('Folder Extension:', path.extname(__dirname)); // ''

console.log('======================Parse======================');
console.log('Full Path Info :', path.parse(__filename));
console.log('Base:', path.parse(__filename).base);
console.log('Dir:', path.parse(__filename).dir);
console.log('Ext:', path.parse(__filename).ext);
console.log('Name:', path.parse(__filename).name);
console.log('Root:', path.parse(__filename).root);

console.log('======================Format======================');
console.log('Format:', path.format({
    dir: __dirname,
    name: 'index',
    ext: '.js',
    root: __dirname
}));
console.log('Format2:', path.format(path.parse(__filename)));

console.log('================= Join ========================');
console.log('Join:', path.join('MyDocuments', 'project', 'index.js'));
console.log('Join:', path.join("/home", "user", "projects/../../", "documents"));

console.log('================= Resolve ========================');
console.log('Resolve:', path.resolve("MyDocuments", "project", "index.js"));
console.log('Resolve:', path.resolve("/users/admin", "readme.md"));

console.log('================= Is Absolute ========================');
console.log('isAbsolute Path File:', path.isAbsolute(__filename));
console.log('isAbsolute Path Folder:', path.isAbsolute(__dirname));
console.log('isAbsolute File:', path.isAbsolute('./practical_walkthrough_file_dir_path.js'));

