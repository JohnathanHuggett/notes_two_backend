exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('notes').insert([
        { title: 'Some Note', content: 'this is a note' },
        { title: 'Some Other Note', content: 'this is a note' },
        { title: 'Some Other Note', content: 'this is a note' },
      ]);
    });
};
