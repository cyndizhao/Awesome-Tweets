const db = require('./conn')

db.query(`
  CREATE TABLE tweets(
    id SERIAL,
    name VARCHAR(255),
    message VARCHAR(255)
  )
`).then(function(){
  console.log('Created table tweets!');
  process.exit();
}).catch(function(error){
  console.error(error);
  process.exit();
})
