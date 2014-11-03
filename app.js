'use strict'

var fs = require('fs');
var wr = fs.createWriteStream(process.argv[3])

wr.write(process.argv[2])

process.stdin.pipe(wr)
process.stdin.pipe(process.stdout)

console.log("user input stored in stdout")


