var http = require('http');
var PORT = 5000;
var HOST = "127.0.0.1"
var SERVER_NAME = "image-api"

//create new instance of server
var restify = require("restify")

//save library to create images objects or reference to collection
imageSave = require('save')('images')

//create restify server
server = restify.createServer({ name: SERVER_NAME})

server.listen(PORT, HOST, function(){
  console.log(`Server ${server.name} listening at ${server.url}`)
  console.log("Endpoints: \n /images method: GET, POST, DELETE")
});

/*var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plan"});
  response.end("hello world 2\n")
});*/

//console.log("Server running at http://127.0.0.1:5000/");

server
  //Allow the use of POST
  .use(restify.fullResponse())

  //
  .use(restify.bodyParser())

server.get('/images', function(req, res, next){
  imageSave.find({}, function(error, images){

  })
})