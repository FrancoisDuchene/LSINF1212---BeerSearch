let express = require('express');
let database = require('./database');
let session = require('./session');
let router = require('./router');

function start(router) {
  let app = express();
  app.use(require('morgan')('dev'));
  app.use(require('cookie-parser')());
  app.use(require('body-parser').json());
  session.configure(app);
  app.use(require('express-validator')());
  app.use(require('errorhandler')());
  app.use('/api', router);
  app.set('view engine', 'ejs');

  database.open()
    .catch(() => {
      console.error('Please check that the MongoDB server is running.');
      process.exit(1);
    });

  app.use("/",router);

  // Middleware pour gerer les erreurs 404
  app.use("*", function(req, res) {
    res.status(404).send('Erreur 404 - Page non trouvée');
  });

  process.on('SIGINT', () => {
  database.close()
    .then(() => process.exit(0)) // exit cleanly
    .catch(() => process.exit(1)); // exit with error status
  });

  let server = app.listen(8080, function() {
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port);
  });
}
exports.start = start;
