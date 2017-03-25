const http = require('http');
var url = require('url');

const server = http.createServer(function(req, res) {
  var page = url.parse(req.url).pathname;
  console.log(page)
  res.writeHead(200, {"Content-Type": "text/plain"})
  if (page == '/') {
    res.write('C\'est la page d\'acceuil');
  }else if(page == '/exit') {
    res.write('Fin');
    server.close();
  }else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.write('Erreur 404');
  }
  console.log("Serveur ouvert au port 8080")
  res.end();
});

//Listener sur la fermeture du serveur
server.on('close', function() {
  console.log("Serveur ferme")
});

//Listener sur une erreur du client
server.on('clientError', function(err, socket) {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  console.log("Erreur de client")
})

server.listen(8080);
