var request = require('request');
var req = request.post('http://127.0.0.1:8099');
process.stdin.pipe(req).pipe(process.stdout);
