const notesData = require("../db/db.json");

// ROUTING

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
  });

  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    res.json(notesData);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const newNote = notesData.filter((note) => note.id !== req.params.id);
    console.log(newNote);
    res.json(notesData);
  });
};
