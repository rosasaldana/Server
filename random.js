var http = require('http');
var url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("hi");

    response.end();
}).listen(8080);

console.log('Server started');