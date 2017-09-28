var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM posts`)
  .then(data => {
    res.json(data.rows)
  });
});

router.post('/', (req, res, next) => {
  knex.raw(`INSERT INTO posts(author, title, content) values ('${req.body.author}', '${req.body.title}', '${req.body.content}') returning *`)
  .then(data => {
    res.json(data.rows)
  })
})

router.post('/:id', (req, res, next) => {
  knex('posts').where('id', req.params.id).update({content: req.body.content}).then(function() {
    res.json('success ' + req.params.id)
  })
})

router.post('/:id/delete', (req, res, next) => {
  knex('posts').where('id', req.params.id).del()
  .then(data => {
    res.json('deleted ' + req.params.id)
  })
})

module.exports = router;
