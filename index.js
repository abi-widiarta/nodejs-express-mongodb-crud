const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/products.route.js");

const app = express();

app.use(express.json());

app.use("/api", route);

// Get All Products
app.get("/", (req, res) => {
  res.send("Welcome To Simple NodeJS Express MongoDB API");
});

// Connect to MongoDB
try {
  mongoose.connect("mongodb+srv://abiwidiarta03:aMzGXwx5zGmQtlAn@backendnode.4jit2jp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackEndNode").then(() => {
    console.log("Database Connected");
    app.listen(3000, () => console.log("server started on port 3000"));
  });
} catch (error) {
  console.log("Failed to connect to database : ", error);
}

module.exports = app;
