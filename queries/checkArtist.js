const dbConnection = require('../database/db_connection.js');

  const check = (name, cb) => {

    dbConnection.query(`select name from artists where name = $1`, [name], (err, res) => {
        if (err) {
          console.log(err);
          return cb(err);
        }
        cb(null, res.rows);
      }
    );

  };

module.exports = check;
