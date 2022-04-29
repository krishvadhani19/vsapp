const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/vsapp";

const connetToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to mongo!");
  });
};

module.exports = connetToMongo;
