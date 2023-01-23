var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    // Por que es q en el ejemplo?
    // Por que a operación de leer los parametros de una url se le dice 
    // Query the url (Consulta los parametros de la ulr)
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = datos.nombre;   
    res.write("Bienvenido" + " " + result);     
    res.end();

}).listen(3000);