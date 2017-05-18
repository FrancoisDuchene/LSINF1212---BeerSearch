let
  mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

let Biere = new mongoose.Schema({
  Bières: String,
  Type: String,
  Teneur en alcool: String,
  Brasserie: String,
  brasserie: String,
  localité: String,
  province: String,
  Principales bières: String,
  Production annuelle en hl: Number,
  Géolocalisation: String
});

User.plugin(passportLocalMongoose, {
  usernameField: 'Bières'
});

module.exports = mongoose.model('Biere', Biere);
