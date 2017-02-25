/**
 * Created by Lidia Khmylko on 2/21/15.
 * Licensed under MIT License.
 *
 * TASK 13. HTTP JSON API SERVER
 *
 *
 * Write an HTTP server that serves JSON data when it receives a GET request
 * to the path '/api/parsetime'. Expect the request to contain a query string
 * with a key 'iso' and an ISO-format time as the value.
 *
 * For example:
 *
 * /api/parsetime?iso=2013-08-10T12:10:15.474Z
 *
 * The JSON response should contain only 'hour', 'minute' and 'second'
 * properties. For example:
 *
 * {
 *  "hour": 14,
 *  "minute": 23,
 *  "second": 15
 *}
 *
 * Add second endpoint for the path '/api/unixtime' which accepts the same
 * query string but returns UNIX epoch time in milliseconds (the number of
 * milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
 * For example:
 *
 * { "unixtime": 1376136615474 }
 *
 * Your server should listen on the port provided by the first argument to
 * your program.
 */

var http = require('http');
var url = require('url');

console.log(module);

var port = process.argv[2];

var server = http.createServer(function (request, response) {
    var parsedUrl = url.parse(request.url, true);
    var d = "";
    if ("iso" in parsedUrl.query){
        d = parsedUrl.query["iso"];
    }
    var date = new Date( Date.parse(d));
    console.log("date " + date);

    var result = {};
    if (parsedUrl.pathname === "/api/parsetime"){
        result["hour"] = date.getHours();
        result["minute"] = date.getMinutes();
        result["second"] = date.getSeconds();
    } else if (parsedUrl.pathname === "/api/unixtime"){
        result["unixtime"] = date.getTime();
    }

    if (Object.keys(result).length > 0){
        response.writeHead(200, { 'Content-Type': 'application/result' });
        response.write(JSON.stringify(result));
    } else {
        response.writeHead(404);
    }
    response.end();
});

server.listen(port);