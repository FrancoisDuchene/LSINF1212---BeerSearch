let express = require('express');

function start(router) {
  let app = express();

  app.use("/",router);

  // Middleware pour gerer les erreurs 404
  app.use("*", function(req, res) {
    res.status(404).send('Erreur 404 - Page non trouvee');
  });

  let server = app.listen(8080, function() {
    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s", host, port);
  });
}
exports.start = start;
