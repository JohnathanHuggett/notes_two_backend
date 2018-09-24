exports.up = function(knex, Promise) {
  return knex.schema.createTable('notes', tbl => {
    tbl.increments();

    tbl.string('title', 32).notNullable();

    tbl.string('content', 2000);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('notes');
};
