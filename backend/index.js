const express = require("express");
const cors = require("cors");
const products = require("./products");
// const descriptions = require("./descriptions");

const app = express();

app.use(express.json()); // Corrected to 'use'
app.use(cors()); // Corrected to 'use'

app.get("/", (req, res) => {
  res.send("Welcome to our online shop API...");
});

app.get("/products", (req, res) => {
  res.send(products);
});

// app.get("/products/:id", (req, res) => {
//   const product = products.find(({ id }) => id === +req.params.id);
//   res.send(product);
// });

// app.get("/desc", (req, res) => {
//   res.send(description);
// });

app.get("/products/:id", (req, res) => {
  const product = products.find(({ id }) => id === +req.params.id);
  res.send(product);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`)); // Corrected the syntax for console.log
