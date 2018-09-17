var http = require('http');
var through = require('through2');

function write(buffer, _, next){
    this.push(buffer.toString().toUpperCase());
    next();
}

var server = http.createServer(function(req, res){
    //var buf = new Buffer();
    if(req.method === 'POST') {
        req.pipe(through(write)).pipe(res);
    }
    else res.end('Not a Post\n');
});

server.listen(parseInt(process.argv[2]));


// Here's the reference solution:

/*var http = require('http');
var through = require('through2');

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(through(function (buf, _, next) {
            this.push(buf.toString().toUpperCase());
            next();
        })).pipe(res);
    }
    else res.end('send me a POST\n');
});
server.listen(parseInt(process.argv[2]));*/