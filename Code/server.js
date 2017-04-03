let express = require('express');

let app = express();

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Vous êtes à l\'accueil');
})
.get('/ttesBieres', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Voici toutes les bieres du marche');
})
.get('/localisation', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Localisation en cours');
})
.use(function(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Erreur 404 - Page introuvable !');
});

let server = app.listen(8080, function() {
  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
});
