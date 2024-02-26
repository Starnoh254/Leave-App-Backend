const express = require("express");
const mongoose = require("mongoose");
const employeesRouter = require('./routes/employee')
const bodyParser = require('body-parser')


const MONGODB_URL =
  "mongodb://127.0.0.1:27017/leave?directConnection=true&serverSelectionTimeoutMS=2000";
const PORT = 3000;
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => console.error(err));


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/employee', employeesRouter);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
