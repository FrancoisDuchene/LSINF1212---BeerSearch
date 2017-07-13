let
  mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

let User = new mongoose.Schema({
  name: String,
  prenom: String,
  pseudo: String,
  sexe: String,
  tel: Number,
  email: String,
  password: String,
  adress: String,
  postalCode: Number,
  city: String,
  country: String,
  coordBank: String,
  balance: Number,
  livrAdress: String,
  livrPostalCode: Number,
  livrCity: String,
  livrCountry: String
});

User.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

module.exports = mongoose.model('User', User);
