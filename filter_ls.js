/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * Module to filter directory listing based on filename extension.
 */


var fs = require('fs');
var path = require('path');

module.exports = function filter_ls(pathname, extension, callback) {
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
};