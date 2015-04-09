var https = require('https');

module.exports = {
  searchUrl: function(req, res) {
    var url = req.query.url;
    https.get(url, function(data) {
      var body = '';
      data.on('data', function(chunk) {
        body += chunk;
      });
      data.on('end', function() {
        res.send(body);
      });
    });
  }
};
