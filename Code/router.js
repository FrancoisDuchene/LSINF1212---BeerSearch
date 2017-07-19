let express = require('express');
let path    = require("path");
let passport = require('passport');
//On appelle les différents modèles de mongoose
let User = require('./models/user');
let Biere = require('./models/bieres');
let Pdv = require('./models/pdv');

let bodyParser = require("body-parser");
// Un fonction speciale pour les routes sous express
let router = express.Router();

let globalUser;

//On vérifie si un utilisateur est loggé ou pas
//On passe ce paramètre à toutes les pages pour activer certaines choses
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
  if(isLog) {
    res.render('pages/index', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/index', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/index.html', function(req, res) {
  if(isLog) {
    res.render('pages/index', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/index', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/RechercheBieres.html', function(req, res) {
  console.log("Accès - Page RechercheBieres")
  if(isLog) {
    res.render('pages/RechercheBieres', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/RechercheBieres', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/PDV.html', function(req, res) {
  if(isLog) {
    res.render('pages/PDV', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/PDV', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/Commander.html', function(req, res) {
  let biereId = req.query.id;
  if(biereId != undefined){
    console.log("id: " + biereId);
    Biere.findOne({_id: biereId}, function(err, docs){
      let biereTest = new Biere();
      biereTest.Bières = docs.Bières;
      console.log(biereTest.Bières);
    });
  }

  if(isLog) {
    res.render('pages/Commander', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/Commander', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/contact.html', function(req, res) {
  if(isLog) {
    res.render('pages/contact', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/contact', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).end(html);
    });
  }
});
router.get('/Login.html', function(req, res) {
  res.render('pages/Login', {isLog:isLog}, function(err,html) {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(html);
  });
});
router.get('/SignIn.html', function(req, res) {
  res.render('pages/SignIn', {isLog:isLog}, function(err,html) {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(html);
  });
});
router.get('/sendSignIn.html', function(req, res) {
  if(isLog) {
    res.render('pages/sendSignIn', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/sendSignIn', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/search.html', function(req, res) {
  console.log("Accès - Page résultats de recherche");
  if(isLog) {
    res.render('pages/search', {nom: globalUser.name,isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }else{
    res.render('pages/search', {isLog:isLog}, function(err,html) {
      if(err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).send(html);
    });
  }
});
router.get('/profile.html', function(req, res) {
  console.log("Accès au profil utilisateur");
  res.render('pages/Profil', {utilisateur: globalUser}, function(err,html) {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(html);
  });
});
router.get('/deconnexion.html', function(req, res) {
  console.log("Page déconnexion utilisateur");
  res.render('pages/deconnecter', {isLog:isLog}, function(err,html) {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(html);
  });
});
router.get('/outilAdmin.html', function(req, res) {
  console.log("Page outils d'administrations");
  res.render('pages/outilAdmin', {utilisateur: globalUser}, function(err,html) {
    if(err) {
      console.log(err);
      return res.status(500).send(err);
    }
    res.status(200).send(html);
  });
});
//Toutes les requetes POST

//Une requete pour s'inscrire
router.post('/sendLogin', function(req, res) {
  let email = req.body.email;
  let password = req.body.password;

  User.findOne({email: email, password: password}, function(error, user){
    if(error){
      console.log(error);
      return res.status(500).send(error);
    }

    if(!user){
      console.log('Login incorrect')
      res.status(304);
      return res.redirect('Login.html');
    }
    globalUser = new User();
    globalUser.name = user.name;
    globalUser.prenom = user.prenom;
    globalUser.pseudo = user.pseudo;
    globalUser.sexe = user.sexe;
    globalUser.tel = user.tel;
    globalUser.email = user.email;
    globalUser.password = user.password;
    globalUser.adress = user.adress;
    globalUser.postalCode = user.postalCode;
    globalUser.city = user.city;
    globalUser.country = user.country;
    globalUser.coordBank = user.coordBank;
    globalUser.balance = user.balance;
    globalUser.livrAdress = user.livrAdress;
    globalUser.livrPostalCode = user.livrPostalCode;
    globalUser.livrCity = user.livrCity;
    globalUser.livrCountry = user.livrCountry;
    isLog = true;
    console.log("Log in réussi");
    res.status(200);
    return res.redirect('index.html');
  });
});

router.post('/sendSignIn', function(req, res) {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  let adress = req.body.adress;
  let country = req.body.country;
  let coordBank = req.body.coordBank;
  let balance = req.body.balance;
  //TODO vérifier que l'adresse mail ne figure pas déjà dans la bdd pour éviter les conflits
  //Il faut alors renvoyer un status(204) dans ce cas-là
  let newUser = new User();
  newUser.name = name;
  newUser.email = email;
  newUser.password = password;
  newUser.adress = adress;
  newUser.country = country;
  newUser.coordBank = coordBank;
  newUser.balance = balance;
  newUser.save(function(error, savedUser){
    if(error){
      console.log(error);
      return res.status(500).send();
    }
    console.log("enregistrement réussi");
    res.status(201);
    return res.redirect('Login.html');
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
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else if(Type == "Tout" && province == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else if(degree == "Tout" && province == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Type: {$regex: sType, $options: 'i'}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else if (degree == "Tout" && Type == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else if (province == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Type: {$regex: sType, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else if (degree == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, Type: {$regex: sType, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else if (Type == "Tout"){
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
  else{
    Biere.find({Bières: { $regex: sBiere, $options: 'i'}, province: {$regex: sProvince, $options: 'i'}, Degree: {"$gt": gte, "$lt": lte}, Type: {$regex: sType, $options: 'i'}}, function(err, docs){
      if(isLog){
        res.render('pages/search', {Bieres: docs, isLog:isLog, nom: globalUser.name}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
      else{
        res.render('pages/search', {Bieres: docs, isLog:isLog}, function(err,html) {
          if(err) {
            console.log(err);
            return res.status(500).send(err);
          }
          return res.status(200).send(html);
        });
      }
    });
  }
});

router.post('/deco', function(req, res) {
  if(isLog) {
    isLog = false;
    console.log("Utilisateur " + globalUser.name + " déconnecté");
    globalUser = undefined;
    res.status(200);
    return res.redirect('index.html');
  }else{
    res.status(304);
    return res.redirect('deconnexion.html');
  }
});

router.post('/modifDonnees', function(req, res) {
  User.findOne({email:req.body.email}, function(err, modifUser) {
    //On prend en compte les possibles erreurs de bdd
    if(err) {
      return res.status(500).send(err);
    }else{
      //On met à jour chaque attribut
      //Si l'un ne se trouve pas dans la requete,
      //On remet simplement l'ancien
      modifUser.name = req.body.nom || modifUser.name;
      modifUser.prenom = req.body.prenom || modifUser.prenom;
      modifUser.pseudo = req.body.pseudo || modifUser.pseudo;
      modifUser.sexe = req.body.sexe || modifUser.sexe;
      modifUser.tel = req.body.tel || modifUser.tel;
      modifUser.email = req.body.email || modifUser.email;
      modifUser.password = req.body.mdp || modifUser.password;
      modifUser.adress = req.body.fact || modifUser.adress;
      modifUser.postalCode = req.body.codePo || modifUser.postalCode;
      modifUser.city = req.body.city || modifUser.city;
      modifUser.country = req.body.pays || modifUser.country;
      modifUser.coordBank = req.body.coord || modifUser.coordBank;
      modifUser.balance = req.body.balance || modifUser.balance;
      modifUser.livrAdress = req.body.addrLivr || modifUser.livrAdress;
      modifUser.livrPostalCode = req.body.codePoLivr || modifUser.livrPostalCode;
      modifUser.livrCity = req.body.cityLivr || modifUser.livrCity;
      modifUser.livrCountry = req.body.paysLivr || modifUser.livrCountry;
      // Save the updated document back to the database
      modifUser.save(function (err, modifUser) {
          if (err) {
              return res.status(500).send(err);
          }
          return res.status(200).send(modifUser);
      });
    }
  });
  res.status(200);
  return res.redirect('/outilAdmin.html');
});

//On exporte notre router vers index.js pour le donner
//en parametre a server.js
module.exports = router;
exports.globalUser = globalUser;
exports.isLog = isLog;
