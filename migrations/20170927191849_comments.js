
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function(table) {
    table.increments();
    table.string('content');
    table.integer('post_id').references('id').inTable('posts').onDelete('CASCADE').nullable();
    table.integer('comment_id').references('id').inTable('comments').onDelete('CASCADE').nullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments');
};
