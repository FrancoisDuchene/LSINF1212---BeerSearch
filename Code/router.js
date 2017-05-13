let express = require('express');
let path    = require("path");
// Un fonction speciale pour les routes sous express
let router = express.Router();

//on renseigne les dossiers où sont stocker les pages
//et ce qui va avec (css, fonts, javascript et ressources)
router.use(express.static(__dirname + '/pages'));
router.use(express.static(__dirname + '/pages/css'));
router.use(express.static(__dirname + '/pages/fonts'));
router.use(express.static(__dirname + '/pages/js'));
router.use(express.static(__dirname + '/pages/res'));

// Middleware basique qui fixe le header pour tous les cas
router.use(function(req, res, next) {
  console.log("Initialisation du routeur");
  next();
});

//toutes les requêtes get
router.get('/', function(req, res) {
  res.sendFile('index.html');
});
router.get('/index.html', function(req, res) {
  res.sendFile('index.html');
});
router.get('/RechercheBieres.html', function(req, res) {
  res.sendFile('RechercheBieres.html');
});
router.get('/PDV.html', function(req, res) {
  res.sendFile('PDV.html');
});
router.get('/Commander.html', function(req, res){
  res.sendFile('Commander.html');
});
router.get('/contact.html', function(req, res){
  res.sendFile('contact.html');
});
router.get('/Login.html', function(req, res){
  res.sendFile('Login.html');
});
router.get('/SignIn.html', function(req, res){
  res.sendFile('SignIn.html');
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
