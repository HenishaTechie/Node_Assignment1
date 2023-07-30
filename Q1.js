const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    if(req.url == "/index.html" && req.method === 'GET'){
        var filename = "./index.html";
        fs.readFile(filename, function(err,data){
            if(err){
                res.writeHead(404,{'Content-type' : 'text/html'});
                return res.end("404 Not Found");
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'});
                res.write(data);
                return res.end();
            }
        });
    }else if(req.url == "/process" && req.method === 'POST'){
        let body = '';
        req.on('data',(chunk)=>{
            body += chunk.toString();
        });
        req.on('end',()=>{
            //body = body.replace('&', ' ');
            body = body.replace(/&/g, ' '); 
            console.log(body);
            res.end('Details :' + body);
        });
    }
    else{
        res.end('<h1>Page is not found</h1>')
    }
});
server.listen(8000,()=>{
    console.log("listen port");
});
