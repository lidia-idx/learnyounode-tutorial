/**
 * Created by Lidia Khmylko on 2/20/15.
 * Licensed under MIT License.
 *
 * TASK 3. FIRST IO
 *
 * Write a program that uses a single synchronous filesystem operation to
 * read a file and print the number of newlines (\n) it contains to the
 * console (stdout), similar to running cat file | wc -l.
 */

var fs = require('fs');

var path = process.argv[2]; // test if the arg here

var buffer = fs.readFileSync(path);

var str = buffer.toString();

var lines = str.split("\n").length - 1;

console.log(lines);