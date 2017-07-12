let express = require('express');
let path    = require("path");
let passport = require('passport');
let User = require('./models/user');
let Biere = require('./models/bieres');
let bodyParser = require("body-parser");
// Un fonction speciale pour les routes sous express
let router = express.Router();

let globalUser;

let isLog = false;

router.use(bodyParser.urlencoded({ extended: true }));


//on renseigne les dossiers où sont stocker les pages
//et ce qui va avec (css, fonts, javascript et ressources)
router.use(express.static(__dirname + '/views'));
router.use(express.static(__dirname + '/views/css'));
router.use(express.static(__dirname + '/views/fonts'));
router.use(express.static(__dirname + '/views/js'));
router.use(express.static(__dirname + '/views/res'));

// Middleware basique qui fixe le header pour tous les cas
router.use(function(req, res, next) {
  console.log("Initialisation du routeur - ");
  next();
});

//toutes les requêtes get
router.get('/', function(req, res) {
  res.render('pages/index');
});
router.get('/index.html', function(req, res) {
  res.render('pages/index');
});
router.get('/RechercheBieres.html', function(req, res) {
  console.log("Accès - Page RechercheBieres")
  res.render('pages/RechercheBieres')
});
router.get('/PDV.html', function(req, res) {
  res.render('pages/PDV');
});
router.get('/Commander.html', function(req, res){
  console.log(req.query.name);
  res.render('pages/Commander');
});
router.get('/contact.html', function(req, res){
  res.render('pages/contact');
});
router.get('/Login.html', function(req, res){
  res.render('pages/Login');
});
router.get('/SignIn.html', function(req, res){
  res.render('pages/SignIn');
});
router.get('/sendSignIn.html', function(req, res){
  res.render('pages/sendSignIn');
});
router.get('/search.html', function(req, res){
  console.log("Accès - Page résultats de recherche");
  res.render('pages/search');
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
  let Bière = req.body.nomBiere;
  let Type = req.body.type;
  let degree = req.body.degree;
  let province = req.body.province;
  let gte;
  let lte;
  switch(degree) {
    case "moins2":
        lte = 2;
        gte = 0;
        break;
    case "2et6":
        lte = 6;
        gte = 2;
        break;
    case "6et8":
        lte = 8;
        gte = 6;
        break;
    case "plus8":
        lte = 20;
        gte = 8;
        break;
    default:
        gte = 0;
        lte = 20;
}

  let sBiere = ".*" + Bière + ".*";
  let sType = ".*" + Type + ".*";
  let sProvince = ".*" + province + ".*";
  //requête
  if(Type == "Tout" && degree == "Tout" && province == "Tout"){
    Biere.find({Bières: {$regex: sBiere, $options: 'i'}}, function(err, docs){
    res.render('pages/search', {Bieres: docs});
    });
  }
  else if(Type == "Tout" && province == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
  else if(degree == "Tout" && province == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Type: {$regex: sType, $options: 'i'}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
  else if (degree == "Tout" && Type == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
  else if (province == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Type: {$regex: sType, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
  else if (degree == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Type: {$regex: sType, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
  else if (Type == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
  else{
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}, Type: {$regex: sType, $options: 'i'}}, function(err, docs){
      res.render('pages/search', {Bieres: docs});
    });
  }
});

//On exporte notre router vers index.js pour le donner
//en parametre a server.js
module.exports = router;
exports.globalUser = globalUser;
exports.isLog = isLog;
