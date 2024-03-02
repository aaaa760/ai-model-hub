const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());

function getModelsData(callback) {
  fs.readFile("data.json", (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(data));
    }
  });
}

app.get("/api/models", (req, res) => {
  getModelsData((err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      res.json(data);
    }
  });
});

app.get("/api/models/:id", (req, res) => {
  getModelsData((err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      const model = data.find((m) => m.id === parseInt(req.params.id));
      if (!model) {
        res.status(404).send("Model not found");
      } else {
        res.json(model);
      }
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
