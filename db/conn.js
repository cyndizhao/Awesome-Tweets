const pgp = require('pg-promise')();

const db = pgp({
  host:'localhost',
  database:'quiz1'
})

module.exports = db;
