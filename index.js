var http = require('http');
var fs = require('fs');


http.createServer(function (request, response) {
    response.sendFile(path.join(__dirname, '../public', 'index.html'));
    response.writeHead(200, {'Content-Type': 'text/plain'});
}).listen(process.env.PORT);


