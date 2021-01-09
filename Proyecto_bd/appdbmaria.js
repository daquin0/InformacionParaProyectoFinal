const mariadb = require('mariadb');
  mariadb.createConnection({host: 'localhost', user: 'root', password: '', database:'dummy'})
    .then(conn => {
      conn.query("select * from datos", [2])
        .then(rows => {
          console.log(rows); // [{ "1": 1 }]
          conn.end();
        })
        .catch(err => { 
          //handle query error
        });
    })
    .catch(err => {
      //handle connection error
    });
