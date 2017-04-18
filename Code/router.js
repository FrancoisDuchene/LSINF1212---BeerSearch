let express = require('express');
let path    = require("path");
// Un fonction speciale pour les routes sous express
let router = express.Router();

// Middleware basique qui fixe le header pour tous les cas
router.use(function(req, res, next) {
  console.log("Initialisation du routeur");
  next();
});

// Toutes les requetes GET

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname+'/pages/index.html'));
});
router.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname+'/pages/index.html'));
});
router.get('/RechercheBieres.html', function(req, res) {
  res.sendFile(path.join(__dirname+'/pages/RechercheBieres.html'));
});
router.get('/PDV.html', function(req, res) {
  res.sendFile(path.join(__dirname+'/pages/PDV.html'));
});

//Toutes les requetes POST

//Une requete pour s'inscrire
router.post('/sendSignIn', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Requete POST pour l'inscription !");
});

router.post('/sendLogin', function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.end("Requete POST pour la connexion");
});

//On exporte notre router vers index.js pour le donner
//en parametre a server.js
module.exports = router;
