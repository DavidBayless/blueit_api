
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {author: 'TROGDORRRRRRRRR', content: 'TROGDORRRRR!', comment_id: null, post_id: 1},
        {author: 'TROGDORRRRRRRRR', content: 'TROGDORRRRR!', comment_id: 1, post_id: null},
        {author: 'TROGDORRRRRRRRR', content: 'TROGDORRRRR!', comment_id: 2, post_id: null},
        {author: 'Magic Unicorns', content: 'But I like rainbows!', comment_id: null, post_id: 2},
        {author: 'Annakin Skywalker', content: 'I would like a robot hand!', comment_id: null, post_id: 1}
      ]);
    });
};
