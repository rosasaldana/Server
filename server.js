// loading the modules
var fileSystem = require('fs');
var http = require('http');   
var url = require('url');
var listingData, server;

var requestHandler = function (request, response) {
	var parsedUrl = url.parse(request.url);
	// url contains '/listings'	
	if (parsedUrl.pathname == '/listings') {  
		response.writeHead(200, {'Content-Type': 'application/json'});
    	response.write(JSON.stringify(listingData));
	}
	// send error if url does not contain '/listings'
	else {
		response.statusCode = 404;
		response.write("Bad gateway error");
	}
	response.end();
}; 

// read the listings.json file and create a server
fileSystem.readFile('listings.json', 'utf8', function(err, data) {
	if(err) { throw err; }
    listingData = JSON.parse(data);
	server = http.createServer(requestHandler).listen(8080);
	console.log("server listening on: http://localhost:8080");
});