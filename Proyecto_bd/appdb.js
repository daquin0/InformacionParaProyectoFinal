var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'dummy',
  port:'3306',
  port:'3306',

});
 
connection.connect();
 
connection.query('select* from datos', function (error, results, fields) {
  if (error) throw error;
  console.log("El nombre es: ",results[0].nombre);
  //console.log('The solution is: ', results[0]);
  //console.log("fields: ",fields)
});
 
connection.end();