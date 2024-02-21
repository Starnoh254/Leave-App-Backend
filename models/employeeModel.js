const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    password: { type: String, required: true },
  },

  {
    collection: "employees",
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Employee", employeeSchema);
