var urlController = require('../controllers/urlController.js');

module.exports = function(app) {
  app.get('/', urlController.searchUrl);
};
