/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * TASK 7. HTTP CLIENT
 *
 * Write a program that performs an HTTP GET request to a URL provided to you
 * as the first command-line argument. Write the String contents of each
 * "data" event from the response to a new line on the console (stdout).
 */

var http = require('http');

var url = process.argv[2];

http.get(url, function(response){
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
        console.log(chunk);
    });

    response.on('error', function(err) {
        console.error(err);
    });
});