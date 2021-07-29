const express = require('express');
const app = express();
const fs = require('fs');
const port = 52273

app.use(express.static(__dirname + '/FE'));
app.use(express.static(__dirname + '/QR_js'));

app.get('/', (request, response) => {
  url = '/FE/start_page.html';
  response.end(fs.readFileSync(__dirname + url));
});

app.get('/css/start_page.css', (request, response) => {
  response.sendFile(__dirname + '/FE/css/' + 'start_page.css');
});

app.get('/images/lab.png', (request, response) => {
  response.sendFile(__dirname + '/FE/images/' + 'lab.png');
});


app.get('/start_page.js', (request, response) => {
  response.sendFile(__dirname + '/FE/js/' + 'start_page.js');
});

app.get('qrcode.html', (request, response) => {
  response.sendFile(__dirname + '/FE/' + 'qrcode.html');
});


app.listen(port, () => {
  console.log('서버 통신 중');
});