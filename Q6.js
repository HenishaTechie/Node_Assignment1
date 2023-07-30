var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('./testfile.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('test.txt'));
console.log("File Decompresses Succesfully");