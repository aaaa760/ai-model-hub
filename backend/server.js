const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

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

app.get("/api/models/category/:category", (req, res) => {
  getModelsData((err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      const category = req.params.category;
      const filteredModels = data.filter(model => model.category === category);
      res.json(filteredModels);
    }
  });
});


app.get("/api/models/category/:category/subcategory/:subcategory", (req, res) => {
  getModelsData((err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      const category = req.params.category;
      const subcategory = req.params.subcategory;
      const filteredModels = data.filter(model => model.category === category && model.subcategory === subcategory);
      res.json(filteredModels);
    }
  });
});

app.post('/api/models', (req, res) => {
  getModelsData((err, data) => {
    if (err) {
      res.status(500).send("Error reading data");
    } else {
      const newModel = { 
        ...req.body, 
        id: data.length + 1, 
        usageCount: Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000
      };
      
      data.push(newModel);
      fs.writeFile("data.json", JSON.stringify(data), (err) => {
        if (err) {
          res.status(500).send("Error writing data");
        } else {
          res.status(201).send("Model added successfully");
        }
      });
    }
  });
});



const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
