var dup = require('duplexer2');
var spawn = require('child_process').spawn;

module.exports = function(cmd, args){
    var ps = spawn(cmd,args);
    return dup(ps.stdin, ps.stdout);
}