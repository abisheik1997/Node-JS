var http = require('http');
var dt = require('./datemodule')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type': 'text/plain'});
    res.write("the date and time"+ dt.myDateTime());
    res.end(dt.myDateTime());
}).listen(500);+