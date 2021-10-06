var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plan"});
  response.end("hello world 2\n")
});

server.listen(5000);

console.log("Server running at http://127.0.0.1:5000/");