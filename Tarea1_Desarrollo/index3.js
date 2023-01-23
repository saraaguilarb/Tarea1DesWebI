var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result1 = parseFloat(datos.num1) * parseFloat(datos.num2);
    let result2 = parseFloat(datos.num1) / parseFloat(datos.num2);
    res.write("Su multiplicacion es:" + " " + result1); 
    res.write('<br>');       
    res.write("Su division es:"  + " " + result2); 
    res.end();

}).listen(3000);
