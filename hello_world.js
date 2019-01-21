var http = require('http');
var server = http.createServer(function(req,res){
 res.writeHead(200, {'Content-Type':'text/plain','Transfer-Econding':'UTF-8'});
 res.end('Hello World');
});
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
 server.listen(8081,add);
 console.log('Server\'s running at http://'+add+':8081/');
});
