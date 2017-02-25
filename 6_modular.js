/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * TASK 6. MAKE IT MODULAR.
 *
 * Same as TASK 5, but using modules.
 */

var ls_module = require("./filter_ls");

var pathname = process.argv[2];
var extension = process.argv[3];

ls_module(pathname, extension, function(err, list){
    if (err) console.error(err);
    for (var i = 0; i < list.length; i++){
        console.log(list[i]);
    }
});