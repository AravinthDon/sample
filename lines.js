var fs = require('fs');
var through = require('through2');
var split = require('split');
var counter = 0;
process.stdin
    .pipe(split())
    .pipe(through(function(buffer, _, next){
        if(counter%2 == 1)
            { this.push(buffer.toString().toUpperCase()+'\n'); }
        else
            { this.push(buffer.toString().toLowerCase()+'\n'); }
        counter++;
        next();
    }))
    .pipe(process.stdout);