const express = require("express");
const path = require("path");
const { evaluateChecklist } = require("./controllers/checklistController");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "views")));

app.get("/api/checklist", async (req, res) => {
  try {
    const results = await evaluateChecklist();
    res.json(results);
  } catch (error) {
    res.status(500).send("Error processing checklist");
  }
});

app.listen(PORT, () => console.log(Server running on http://localhost:${PORT}));
