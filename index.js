require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const employeesRouter = require('./routes/employee')
const bodyParser = require('body-parser')
const errorHandler = require('./utils/errorHandler')


const PORT = process.env.PORT || 3000
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected Successfully!");
  })
  .catch((err) => console.error(err));


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/employee', employeesRouter);
app.use(errorHandler)
app.listen(PORT , () => {
  console.log(`Server is running on port ${PORT}`);
});
