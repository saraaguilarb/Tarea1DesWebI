var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    // Por que es q en el ejemplo?
    // Por que a operación de leer los parametros de una url se le dice 
    // Query the url (Consulta los parametros de la ulr)
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