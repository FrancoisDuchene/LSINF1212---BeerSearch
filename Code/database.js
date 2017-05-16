const mongoose = require('mongoose');

const connectionUrl = 'mongodb://localhost/Bieres';

mongoose.Promise = global.Promise; // use standard promises for async calls

exports.open = function openMongoDBConnection() {
  return mongoose.connect(connectionUrl, {})
    .then(() => console.log('Connected to %s', connectionUrl))
    .catch(error => {
      console.error('Error connecting to %s: %s', connectionUrl, error);
      return Promise.reject(error);
    });
}

exports.close = function closeMongoDBConnection() {
  return mongoose.connection.close()
    .then(() => console.log('Disconnected from %s', connectionUrl))
    .catch(error => {
      console.error('Failed to close connection to %s: %s', connectionUrl, error);
      return Promise.reject(error);
    });
}
