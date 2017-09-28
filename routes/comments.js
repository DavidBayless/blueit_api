var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex.raw(`SELECT * FROM comments`)
  .then(data => {
    res.json(data.rows)
  });
});

router.post('/:id', (req, res, next) => {
  knex('comments').insert({author: req.body.author, content: req.body.content, comment_id: null, post_id: req.params.id}).returning('*').then(data => {
    res.json(data.rows)
  })
})

router.post('/:id/reply', (req, res, next) => {
  knex('comments').insert({author: req.body.author, content: req.body.content, comment_id: req.params.id, post_id: null}).returning('*').then(data => {
    res.json(data.rows)
  })
})

router.post('/:id/edit', (req, res, next) => {
  knex('comments').where('id', req.params.id).update({content: req.body.content}).returning('*').then(data => {
    res.json(data.rows)
  })
})

router.post('/:id/delete', (req, res, next) => {
  knex('comments').where('id', req.params.id).del().then(() => {
    res.json('Deleted ' + req.params.id)
  })
})

module.exports = router;
