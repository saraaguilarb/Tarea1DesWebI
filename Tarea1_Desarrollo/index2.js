var http = require('http');
var url = require('url');

http.createServer( function(req, res){
   
    var q = url.parse(req.url, true);
    var datos = q.query; 
    var i=2;
    var j=3;

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = parseFloat(datos.num1);
    res.write("Doble:" + " " + result*i);  
    res.write('<br>');
    res.write("Triple:" + " " + result*j); 
    res.end();

}).listen(3000);
