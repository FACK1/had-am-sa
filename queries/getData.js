const dbConnection = require('../database/db_connection.js');

  const getData = (category,text,cb) => {
      const parameters = [text];
    if (category==="song")
    {
      var q=`SELECT name,img_url,title,link from artists join track_artist on artists.id=track_artist.artist_id join tracks on tracks.id=track_artist.track_id where title=$1;`;
      dbConnection.query(q,parameters, (err, res) => {
        if (err) return cb(err);
        cb(null, res.rows);
      });
    }
    else if (category==="artist") {
      var q=`select artists.name,artists.img_url,tracks.title,tracks.link from artists full outer join track_artist on track_artist.artist_id=artists.id full outer JOIN tracks on track_artist.track_id=tracks.id where artists.name =$1;`;
        dbConnection.query(q,parameters, (err, res) => {
          if (err) return cb(err);
          cb(null, res.rows);
        });
    }
}
module.exports = getData;
