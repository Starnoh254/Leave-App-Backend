const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const managerSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
  },
  { collection: "managers" },
  { timestamp: true }
);

module.exports = mongoose.model("Manager", managerSchema);
