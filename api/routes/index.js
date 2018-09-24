const { notesController } = require('../controllers');

module.exports = server => {
  // server test
  server.get('/api', (req, res) => {
    res.status(200).json({ msg: 'api running' });
  });

  server
    .route('/api/notes')
    .get(notesController.getNotes)
    .post(notesController.createNote);

  server
    .route('/api/notes/:id')
    .get(notesController.getNoteById)
    .delete(notesController.deleteNote)
    .put(notesController.editNote);
};
