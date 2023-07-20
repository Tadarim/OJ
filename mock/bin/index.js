const http = require('http');
const app = require('../app.js');

const port = 3001;
app.set('port', port);

const server = http.createServer(app);
server.listen({port}, () => {
    console.log('server listening at localhost:' + port);
});