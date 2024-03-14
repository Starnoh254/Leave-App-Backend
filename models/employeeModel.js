const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    userName: { type: String, required: true, unique: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, minlength: 8 },
    joiningDate: { type: Date, required: true },
    phoneNumber: { type: Number, required: true, unique: true },
    company: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
    collection: "employees",
  }
);

module.exports = mongoose.model("Employee", employeeSchema);