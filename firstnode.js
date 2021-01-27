var http = require('http');
var dt = require('./firstmodule');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("The date and time is: " +dt.myDateTime());
  res.write(req.url);
  res.end();
}).listen(8081);
