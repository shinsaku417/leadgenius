var path = require('path');

module.exports = function (app, express) {
  app.use(express.static(__dirname + '/../app'));

  var urlRouter = express.Router();

  app.use('/url', urlRouter);

  require('./routers/urlRouter.js')(urlRouter);
};
