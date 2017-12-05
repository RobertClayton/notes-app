var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "./public/views");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(9292);
