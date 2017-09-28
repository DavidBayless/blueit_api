
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments();
    table.string('author');
    table.string('title');
    table.text('content');
    table.integer('votes').default(0);
    table.timestamp('created_at').default(knex.fn.now());
    table.text('image_url').default("http://store-nz.monsroyale.com/c.3934103/app-nz/img/no_image_available.jpeg?resizeid=3&resizeh=1000&resizew=1000").notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
