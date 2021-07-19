const notesData = require("../db/db.json");

// ROUTING

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(notesData);
    console.log(notesData);
  });

  app.post("/api/notes", (req, res) => {
    notesData.push(req.body);
    res.json(notesData);
  });

  app.delete("/api/notes/:id", (req, res) => {
    console.log(notesData);

    notesData.filter(notesData.id);
    res.json(notesData);
  });
};
