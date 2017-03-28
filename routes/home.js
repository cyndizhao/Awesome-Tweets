const Express = require('express');
const router = Express.Router();
const db = require('../db/conn');


router.get('/home', function(req, res, next){
  res.render('home');
})

router.get('/dashboard', function(req, res, next){
  db.query(`SELECT * FROM tweets ORDER BY LENGTH(message)`)
    .then(function (infos) {
      res.render('dashboard', {infos: infos});
    })
    .catch(function (err) {
        res.send(err);
    });
  // res.render('dashboard', {name:null, message: null});
})

router.post('/dashboard', function (req, res, next) {

  // const name = req.body.name;
  // const message = req.body.message;
  const info = req.body;
  console.log(info);
  db.query(`
INSERT INTO tweets (name, message) VALUES ($<name>, $<message>)  `, info
  ).then(function () {
    // res.redirect('/teaminfo') //go to localhost:5001/posts
    console.log("database insert");
    res.redirect('/dashboard');

  }).catch(function (err) { res.send(err) })
  // res.render('dashboard', {name:name, message:message});
})

module.exports = router;
