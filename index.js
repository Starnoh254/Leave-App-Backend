const express = require("express");
const mongoose = require('mongoose')

const PORT = 3000;
const app = express();


mongoose.connect(
  "mongodb://127.0.0.1:27017/leave?directConnection=true&serverSelectionTimeoutMS=2000"
).then(() => {
  console.log("MongoDB Connected Successfully!");
}).catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
