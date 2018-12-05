const {Pool} = require('pg');
require('env2')('config.env');
const { DATABASE_URL } = process.env;
if(!DATABASE_URL){
  throw Error('No Data Base URL');
}
const option = {
  connectionString : DATABASE_URL
};
option.ssl = option.host !== 'localhost';
module.exports = new Pool(option);
