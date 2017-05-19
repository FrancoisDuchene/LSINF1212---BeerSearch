const
  ms = require('ms'),
  session = require('express-session'),
  passport = require('passport'),
  MongoStore = require('connect-mongo')(session),
  mongoose = require('mongoose'),
  User = require('./models/user');
  Biere =require('./models/bieres');

exports.configure = function configureExpressSession(app) {

  app.use(session({
    secret: 'very very secret',
    cookie: { maxAge: ms('1 day') },
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: true
  }));

  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(User.createStrategy());
  passport.use(Biere.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.serializeUser(Biere.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  passport.deserializeUser(Biere.deserializeUser());

};
