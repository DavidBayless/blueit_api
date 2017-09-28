
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {author: 'Bob The Builder', title: 'Building Stuff!', content: "I like build stuff. Don't you like to build stuff? Let's build stuff together! Comment below what you would like to build!"},
        {author: 'Randy Rainbow', title: 'Is Pee Wee Herman good?', content: "The answer is no."},
        {author: 'TROGDORRRRRRRRR', title: 'Burninating the Countryside', content: "TROOOOOGDOOOOOOORRRRRRR!!!!!"}
      ]);
    });
};
