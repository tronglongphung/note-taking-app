const notesData = require("../db/db.json");
const fs = require("fs");
// ROUTING

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    fs.readFile("../db/db.json", "utf8");

    res.json(notesData);
  });

  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    res.json(notesData);
  });

  // app.delete("/api/notes/:id", (req, res) => {
  //   const newNote = notesData.filter((note) => note.id !== req.params.id);
  //   console.log(newNote);
  //   res.json(notesData);
  // });
};
