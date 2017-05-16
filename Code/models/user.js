let
  mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose');

let User = new mongoose.Schema({
  coordBank: String,
  balance: Number,
  name: String,
  email: String,
  password: String,
  adress: String,
  country: String
});

User.plugin(passportLocalMongoose, {
  usernameField: 'email'
});

module.exports = mongoose.model('User', User);
