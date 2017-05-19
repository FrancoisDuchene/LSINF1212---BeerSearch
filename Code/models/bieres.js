let
  mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

let Biere = new mongoose.Schema({
  Bières: String,
  Type: String,
  Degree: String,
  Brasserie: String,
  brasserie: String,
  localité: String,
  province: String,
  Principales_bières: String,
  Production_annuelle_en_hl: Number,
  Géolocalisation: String
});

Biere.plugin(passportLocalMongoose, {
  usernameField: 'Bières'
});

module.exports = mongoose.model('Biere', Biere);
