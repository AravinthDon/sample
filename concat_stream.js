var concat = require('concat-stream');
var through = require('through2');

process.stdin
    .pipe(concat(function(body){
        var sr = body.toString().split('').reverse().join('');        
        console.log(sr);
    }));