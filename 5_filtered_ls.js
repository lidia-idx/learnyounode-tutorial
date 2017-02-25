/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * TASK 5. FILTERED LS
 *
 * Create a program that prints a list of files in a given directory,
 * filtered by the extension of the files. You will be provided a directory
 * name as the first argument to your program (e.g. '/path/to/dir/') and a
 * file extension to filter by as the second argument.
 */

var fs = require('fs');
var path = require('path');

//module.exports =
function filterExt(pathname, extension, callback) {
    var dot_ext = "." + extension;
    var filtered = [];

    fs.readdir(pathname, function (err, list) {
        if (err) return callback(err);
        for (var i = 0; i < list.length; i++) {
            if (path.extname(list[i]) === dot_ext)
                filtered.push(list[i]);
        }
        callback(null, filtered);
    });
}

function log(err, result){
    if (!err) {
        for(var i = 0; i < result.length; i++){
            console.log(result[i]);
        }
    } else {
        console.log(err);
    }
}

filterExt(process.argv[2], process.argv[3], log);

//module.exports = filtered_ls(pathname, extenstion, callback);