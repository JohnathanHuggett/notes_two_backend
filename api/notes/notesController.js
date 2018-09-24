const db = require('../notesDb/helpers');

// TODO: make user catch for create delete and update

const getNotes = (_, res) => {
  db.getNotes()
    .then(notes => {
      res.status(200).json(notes);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

const getNoteById = (req, res) => {
  const { id } = req.params;

  db.getNotes({ id })
    .then(note => {
      res.status(200).json(note);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

const createNote = (req, res) => {
  const newNote = req.body;

  db.createNote(newNote)
    .then(id =>
      res
        .status(200)
        .json(`Your note with id:${id} has been created`)
    )
    .catch();
};

const deleteNote = (req, res) => {
  const { id } = req.params;

  db.deleteNote({ id })
    .then(id =>
      res.status(200).json({
        msg: `Your note with id:${id} has been deleted`,
      })
    )
    .catch(err => {
      res.status(500).json(err);
    });
};

const editNote = (req, res) => {
  const { id } = req.params;
  const note = req.body;

  db.editNote({ id }, note)
    .then(_ =>
      res.status(200).json({
        msg: `Your note with id:${id} has been updated`,
      })
    )
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  deleteNote,
  editNote,
};
