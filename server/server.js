const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, '../')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
    console.log(req.socket.server);
    next();
});

app.listen(port);
app.server = http.createServer(app)
http.createServer(app).listen(3000), 'http://192.168.77.250';
console.log('Server started at http://192.168.77.250:' + 3000);
console.log('Server started at http://localhost:' + port);
console.log('Press Ctrl+C to quit.');

