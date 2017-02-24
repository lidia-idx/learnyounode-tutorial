/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * TASK 4. ASYNCH I/O
 * Write a program that uses a single asynchronous filesystem operation to
 * read a file and print the number of newlines it contains to the console
 * (stdout), similar to running cat file | wc -l.
 */

var fs = require('fs');

function doAsynchIO(callback) {
    fs.readFile(process.argv[2], function (err, fBuffer) {
        if (err)
            return console.error(err);
        var result = fBuffer.toString().split("\n").length - 1;
        callback(result);
    });
}

function logResult(result){
    console.log(result);
}

doAsynchIO(logResult);


