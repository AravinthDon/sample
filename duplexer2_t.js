var dup = require('duplexer2');
//var spawn = require('child_process').spawn;

module.exports = function(counter){
    //var ps = spawn(cmd,args);
    return dup(ps.stdin, counter);
}