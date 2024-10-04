const path = require('node:path'); 
const basepath = path.basename('C:\\temp\\myfile.html');
const dirpath = path.dirname('C:\\temp\\myfile.html');
const a3 = path.extname(__filename);
console.log(basepath);
console.log(dirpath);
console.log(a3);
