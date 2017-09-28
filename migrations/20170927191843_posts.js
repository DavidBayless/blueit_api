
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.string('author');
    table.string('title');
    table.text('content');
    table.integer('votes').default(0);
    table.timestamp('created_at').default(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
