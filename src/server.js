const http = require('http');
const router = require('./router.js');
const server = http.createServer(router);
const PORT = process.env.PORT || 3003;
server.listen(PORT, function () {
  console.log(`server is up and running on the port number ${PORT}!`);
});
