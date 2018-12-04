const {Pool} = require('pg');
require('env2')('config.env');
const { DB_URL } = process.env;
if(!DB_URL){
  throw Error('No Data Base URL');
}
const option = {
  connectionString : DB_URL
};
module.exports = new Pool(option);
