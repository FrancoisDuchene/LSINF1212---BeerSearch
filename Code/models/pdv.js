let
  mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

let pdv = new mongoose.Schema({
  Nom: String,
  AncienNom: String,
  Ville: String,
  NumeroAdresse: Number,
  CodePostal: Number,
  Adresse: String,
  localite: String,
  province: String,
  Pays: String,
  HeuresOuvertures: String,
  Telephone: String,
  tablesExterieur: Boolean,
  MicroBrasserie: Boolean,
  Operateur: String,
  gay: Boolean,
  nourriture: Boolean,
  SiteInternet: String,
  AccesHandicape: Boolean,
  Geolocalisation: {La: Number, Lo: Number}
});

pdv.plugin(passportLocalMongoose, {
  usernameField: 'pdv'
});

module.exports = mongoose.model('PDV', pdv);
