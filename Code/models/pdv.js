let
  mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

let pdv = new mongoose.Schema({
  Nom: String,
  Ville: String,
  NumeroAdresse: Number,
  CodePostal: Number,
  Adresse: String,
  localite: String,
  province: String,
  tablesExterieur: Boolean,
  nourriture: Boolean,
  SiteInternet: Number,
  AccesHandicape: Boolean,
  Geolocalisation: [{La: Number, Lo: Number}]
});

pdv.plugin(passportLocalMongoose, {
  usernameField: 'pdv'
});

module.exports = mongoose.model('PDV', pdv);
