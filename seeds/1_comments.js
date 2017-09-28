
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {content: 'TROGDORRRRR!', comment_id: null, post_id: 1},
        {content: 'TROGDORRRRR!', comment_id: 1, post_id: null},
        {content: 'TROGDORRRRR!', comment_id: 2, post_id: null},
        {content: 'But I like rainbows!', comment_id: null, post_id: 2},
        {content: 'I would like a robot hand!', comment_id: null, post_id: 1}
      ]);
    });
};
