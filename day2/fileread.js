var http = require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('file.html',function(err,data){
        res.writeHead(200,{'content-Type': 'text/html'});
        res.write(data);
        res.end();
        })
}).listen(652);
