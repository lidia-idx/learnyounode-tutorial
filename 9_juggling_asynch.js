/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * TASK 9. JUGGLING ASYNCH
 *
 * This problem is the same as the previous problem (HTTP COLLECT) in that
 * you need to use http.get(). However, this time you will be provided with
 * three URLs as the first three command-line arguments.
 *
 * You must collect the complete content provided to you by each of the URLs
 * and print it to the console (stdout). You don't need to print out the
 * length, just the data as a String; one line per URL. The catch is that you
 * must print them out in the same order as the URLs are provided to you as
 * command-line arguments.
 */

var http = require('http');
var bl = require('bl');

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var data_arr = [];
var queue = 0;

function doAsynchGET(callback){

    for (var i = 0; i < urls.length; i++)(function(i){
        http.get(urls[i], function(response){
            response.pipe(bl(function(err, data){
                if (err)
                    return console.error(err);
                data_arr[i] = data.toString();
                queue ++;
                if (queue === urls.length){
                    callback();
                }
            }))
        });
    })(i);
}

function logResults(){
    for (var i = 0; i < data_arr.length; i++){
        console.log(data_arr[i]);
    }
}

doAsynchGET(logResults);
