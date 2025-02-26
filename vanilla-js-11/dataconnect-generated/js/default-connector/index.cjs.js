const { queryRef, executeQuery, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'vanilla-js-10',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

function listMoviesRef(dc) {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMovies');
}
exports.listMoviesRef = listMoviesRef;

exports.listMovies = function listMovies(dc) {
  return executeQuery(listMoviesRef(dc));
};

