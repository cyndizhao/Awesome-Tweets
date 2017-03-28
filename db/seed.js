const db = require('./conn');
const faker = require('faker');

for (let i=0; i<6; i++){
db.query(`
  INSERT INTO tweets (name, message)
  VALUES($<name>, $<message>)`, {
    name: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    message: faker.hacker.phrase()
  }).then(function(){
  console.log('Create a post');

  //only exit node on the last query
  if(i === 5) process.exit();
})
}

/*
node db/seed.js //run js file
psql -d ned //go to your db "ned"
SELECT * FROM posts;//select your table
\q //quit db
*/
