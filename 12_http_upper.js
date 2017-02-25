/**
 * Created by Lidia Khmylko on 2/21/15.
 * Licensed under MIT License.
 *
 * TASK 12. HTTP UPPERCASERER
 *
 * Write an HTTP server that receives only POST requests and converts
 * incoming POST body characters to upper-case and returns it to the client.
 *
 * Your server should listen on the port provided by the first argument to
 * your program.
 */

var http = require('http');
var map = require('through2-map');

var port = +process.argv[2];

var server = http.createServer(function(request, response){

    request.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(response);
});


server.listen(port);
