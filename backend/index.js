const express = require("express");
const connectToMongo = require("./db");
const app = express();
const cors = require("cors");

connectToMongo();

const port = 5000;

app.use(cors());

// to use request body
app.use(express.json());

// routes
app.use("/api/auth/", require("./routes/auth"));

app.listen(port, () => {
  console.log(`Port listening on port ${port}`);
});
