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
  let {image_url, author, title, content} = req.body;
  image_url = image_url || "http://store-nz.monsroyale.com/c.3934103/app-nz/img/no_image_available.jpeg?resizeid=3&resizeh=1000&resizew=1000";
  knex.raw(`INSERT INTO posts(author, title, content, image_url) values ('${author}', '${title}', '${content}', '${image_url}') returning *`)
  .then(data => {
    res.json(data.rows)
  })
})

router.post('/:id', (req, res, next) => {
  knex('posts').where('id', req.params.id).update({content: req.body.content}).then(function() {
    res.json('success ' + req.params.id)
  })
})

router.post('/:id/downvote', (req, res, next) => {
  knex('posts').where('id', req.params.id).select().then((data) => {
    knex('posts').where('id', req.params.id).update({votes: data[0].votes - 1}).returning('*').then(response => {
      let updated = data[0];
      updated.votes--;
      res.json([updated])
    })
  })
})

router.post('/:id/upvote', (req, res, next) => {
  knex('posts').where('id', req.params.id).select().then((data) => {
    knex('posts').where('id', req.params.id).update({votes: data[0].votes + 1}).returning('*').then(response => {
      let updated = data[0];
      updated.votes++;
      res.json([updated])
    })
  })
})

router.post('/:id/delete', (req, res, next) => {
  knex('posts').where('id', req.params.id).del()
  .then(data => {
    res.json('deleted ' + req.params.id)
  })
})

module.exports = router;
