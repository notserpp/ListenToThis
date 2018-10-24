var http = require('http');

http.createServer(function (request, respone) {
    response.writeHead(200, {'Content-Type': 'text/html'});
}).listen(process.env.PORT);