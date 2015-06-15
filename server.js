var Primus = require('primus.io');
var server = require('http').createServer();

var primus = new Primus(server, { transformer: 'websockets', parser: 'JSON' });

primus.on('connection', function (spark) {

  // listen to hi events
  spark.on('hi', function (msg) {

    console.log(msg); //-> hello world

    // send back the hello to client
    spark.send('hello', 'hello from the server');

  });

});

server.listen(8080);
