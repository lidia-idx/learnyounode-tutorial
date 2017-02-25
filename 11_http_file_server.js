/**
 * Created by Lidia Khmylko on 2/21/15.
 * Licensed under MIT License.
 *
 * TASK 11. HTTP FILE SERVER
 *
 * Write an HTTP server that serves the same text file for each request it
 * receives.
 *
 * Your server should listen on the port provided by the first argument to
 * your program.
 *
 * You will be provided with the location of the file to serve as the second
 * command-line argument. You must use the fs.createReadStream() method to
 * stream the file contents to the response.
 */


var http = require('http');

var fs = require('fs');

var port = +process.argv[2];

var location = process.argv[3];

var server = http.createServer(function(request, response) {
    response.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(location).pipe(response);
});

server.listen(port);