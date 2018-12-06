const dbConnection = require('../database/db_connection.js');

const setData = (name, img, cb) => {
  const parameters = [name, img];
  var q = 'insert into artists (name, img_url) VALUES ($1, $2);'

  dbConnection.query(q, parameters, (err, res) => {
      if (err) {
        console.log(err);
        return cb(err);
      }
      cb(null, res);
    }
  );


};

module.exports = setData;
