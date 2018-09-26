const db = require('../notesDb/helpers');

const getNotes = (_, res) => {
  db.getNotes()
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json(err));
};

const getNoteById = (req, res) => {
  const { id } = req.params;

  db.getNotes({ id })
    .then(note => {
      if (note) {
        res.status(200).json(note);
      } else {
        res.status(404).json({
          msg: `That not does not exist`,
        });
      }
    })
    .catch(err => res.status(500).json(err));
};

const createNote = (req, res) => {
  const newNote = req.body;
  const { title, content } = req.body;

  if (!title.length || !content.length)
    return res.status(404).json({ msg: 'Please provide a title and content' });

  db.createNote(newNote)
    .then(note => res.status(200).json(note))
    .catch(err => res.status(500).json(err));
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  db.deleteNote({ id })
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json(err));
};

const editNote = (req, res) => {
  const { id } = req.params;
  const note = req.body;

  db.editNote({ id }, note)
    .then(notes => res.status(200).json(notes))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  deleteNote,
  editNote,
};
