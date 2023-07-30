var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./testfile.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('testfile.gz'));
console.log("File Compresses Succesfully");