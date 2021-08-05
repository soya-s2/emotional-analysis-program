const express = require('express');
const app = express();
const fs = require('fs');
const port = 52273

var mysql = require("mysql");
//var result = require('main.js');
var connection = mysql.createConnection({
    host: '203.232.193.161',
    user: 'user1',  //계정
    password: 'irlab12!@',  //DB비밀번호
    database: 'test'
});
//console.log(result);
connection.connect();

app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/js'));

connection.query('SELECT * FROM new_foods WHERE name="도라야끼통단팥"', function (error, results, fields) {
  if (error) throw error;
  const property = ['name', 'manufac', 'price', 'url', 'classify', 'capacity', 'kcal', 'protein', 'fat', 'carbohydrate', 'sugar', 'calcium', 'potassium', 'salt', 'cholesterol']
  product_list = {};
  for (var i = 0; i < property.length; i++) {
      product_list[property[i]] = results[0][Object.keys(results[0])[i + 1]];
  }
});

app.get('/', (request, response) => {
  url = '/start_page.html';
  response.end(fs.readFileSync(__dirname + url));
});

app.get('/css/start_page.css', (request, response) => {
  response.sendFile(__dirname + '/css/' + 'start_page.css');
}); 


app.get('/start_page.html', (request, response) => {
  response.sendFile(__dirname + '/start_page.html');
});

app.get('/css/qrcode.css', (request, response) => {
  response.sendFile(__dirname + '/css/' + 'qrcode.css');
});

app.get('/images/lab.png', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'lab.png');
});

app.get('/images/flash-off.png', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'flash-off.png');
});

app.get('/images/flash.png', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'flash.png');
});

app.get('/images/photo-library.png', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'photo-library.png');
});

app.get('/images/box.png', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'box.png');
});

app.get('/images/line.png', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'line.png');
});

app.get('/images/test.jpg', (request, response) => {
  response.sendFile(__dirname + '/images/' + 'test.jpg');
});

app.get('/js/start_page.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'start_page.js');
});

app.get('/js/main.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'main.js');
});

app.get('/js/alignpat.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'alignpat.js');
});

app.get('/js/bitmat.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'bitmat.js');
});

app.get('/js/bmparser.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'bmparser.js');
});

app.get('/js/bowser.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'bowser.js');
});

app.get('/js/datablock.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'datablock.js');
});

app.get('/js/databr.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'databr.js');
});

app.get('/js/datamask.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'datamask.js');
});

app.get('/js/decoder.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'decoder.js');
});

app.get('/js/detector.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'detector.js');
});

app.get('/js/errorlevel.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'errorlevel.js');
});

app.get('/js/findpat.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'findpat.js');
});

app.get('/js/formatinf.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'formatinf.js');
});

app.get('/js/gf256.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'gf256.js');
});

app.get('/js/gf256poly.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'gf256poly.js');
});

app.get('/js/grid.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'grid.js');
});

app.get('/js/qrcode.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'qrcode.js');
});

app.get('/js/rsdecoder.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'rsdecoder.js');
});

app.get('/js/utility.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'utility.js');
});

app.get('/js/version.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'version.js');
});

app.get('/css/output.css', (request, response) => {
  response.sendFile(__dirname + '/css/' + 'output.css');
});

app.get('/output.html', (request, response) => {
  const product = product_list;
  const template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>output.html</title>
    <link href="./css/output.css" type="text/css" rel="stylesheet" />
  </head>
  <body>
    <div class="container">
      <h1 class="name"> ${product.name} </h1>
      <img class="img" src="./images/test.jpg"/>
      <h1 class="price"> ${product.price}원 </h1>
      <h1 class="capacity"> ${product.capacity}g </h1>
   
      <h1 class="carbohydarate"> 탄수화물 <br> ${product.carbohydrate}</h1>
      <h1> 단백질 <br>  ${product.protein}</h1>
      <h1> 지방 <br>  ${product.fat}</h1>

      <h1> 칼로리 <br>  ${product.kcal}kcal</h1>
      <h1> 나트륨 <br>  ${product.salt}</h1>
      <h1> 당 <br>  ${product.sugar}</h1>

      <h1> 칼슘 <br>  ${product.calcium}</h1>
      <h1> 칼륨 <br>  ${product.potassium}</h1>
      <h1> 콜레스테롤 <br>  ${product.cholesterol}</h1>
     
    </div>
  </body>
  </html>
`;
    
  response.send(template);
});


app.get('/js/manifest.json', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'manifest.json');
});

app.get('/qrcode.html', (request, response) => {
  response.sendFile(__dirname + '/qrcode.html');
});

app.get('/js/output.js', (request, response) => {
  response.sendFile(__dirname + '/js/' + 'output.js');
});

app.listen(port, () => {
  console.log('서버 통신 중');
});
