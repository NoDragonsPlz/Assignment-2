//requires Http
var http = require('http');

//Defines a port
const PORT=8000;

//Gets request and response
function handleRequest(request, response){
  response.end('It Works!! Path Hit: ' + request.url);
}

//Creates a server
var server = http.createServer(handleRequest);

//starts the server
server.listen(PORT, function(){
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});
//creates a dispatcher
var dispatcher = require('httpdispatcher');
//uses dispatcher
function handleRequest(request, response){
  try {
    //log the request on console
    console.log(request.url);
    //Disptach
    dispatcher.dispatch(request, response);
  } catch(err) {
    console.log(err);
  }
}
//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request
dispatcher.onGet("/page1", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Page One');
});

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Got Post Data');
});
