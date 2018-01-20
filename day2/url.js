var http = require('http');
var url = require('url')
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type': 'text/plain'});
    console.log("req.url:"+req.url);
    var q=url.parse(req.url,true).query;
    var txt =q.year+" " +q.month;
    res.end(txt);
}).listen(8000);