let express = require('express');
let path    = require("path");
let passport = require('passport');
let User = require('./models/user');
let bodyParser = require("body-parser");
// Un fonction speciale pour les routes sous express
let router = express.Router();

let globalUser;

let isLog = false;

router.use(bodyParser.urlencoded({ extended: true }));

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
router.get('/sendSignIn.html', function(req, res){
  res.sendFile('sendSignIn.html');
});

//Toutes les requetes POST

//Une requete pour s'inscrire
router.post('/sendLogin', function(req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({email: email, password: password}, function(error, user){
    if(error){
      console.log(error);
      return res.status(500).send();
    }

    if(!user){
      return res.redirect('Login.html');
    }
    globalUser = new User();
    globalUser.coordBank = user.coordBank;
    globalUser.balance = user.balance;
    globalUser.name = user.name;
    globalUser.email = user.email;
    globalUser.password = user.password;
    globalUser.adress = user.adress;
    globalUser.country = user.country;
    isLog = true;
    console.log("Log in réussi");
    res.redirect('index.html');
    return res.status(200).send();
  });
});

router.post('/sendSignIn', function(req, res) {
  let coordBank = req.body.coordBank;
  let balance = req.body.balance;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let adress = req.body.adress;
  let country = req.body.country;

  let newUser = new User();
  newUser.coordBank = coordBank;
  newUser.balance = balance;
  newUser.name = name;
  newUser.email = email;
  newUser.password = password;
  newUser.adress = adress;
  newUser.country = country;
  newUser.save(function(error, savedUser){
    if(error){
      console.log(error);
      return res.status(500).send();
    }
    console.log("enregistrement réussi");
    res.redirect('Login.html');
    return res.status(200).send();
  });
});

router.post('/search', function(req, res){
  //récupérer les infos depuis le code html
  let Bière = req.body.Bière;

  //requête
  Biere.find({Bière: "/" + Bière + "/i"}, function(err, docs){
    router.get('/search', function(req, res){
      res.render('listBiere.html', {coordinate: docs});
    });
  });

});
//On exporte notre router vers index.js pour le donner
//en parametre a server.js
module.exports = router;
exports.globalUser = globalUser;
exports.isLog = isLog;
