var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "203.232.193.161",
  user: "user1",
  password: "irlab12!@",
  database: "test",
});

var name = "빠다코코낫";
var base_sql = "SELECT * FROM foods WHERE food_name IN ";
var f_sql = base_sql + '("' + name + '")';
connection.query(f_sql, function (err, rows, fields) {
  if (err) {
    console.log(err);
  } else {
    const f_name = rows[0];
    console.log("제품명 : ", rows[0].food_name);
    console.log("가격 : ", rows[0].price);
    //var food_name = document.querySelector('.food_name');

    //food_name.innerHTML = f_name;
  }
});