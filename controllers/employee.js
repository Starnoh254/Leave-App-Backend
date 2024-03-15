const Employee = require("../models/employeeModel");
const generateAccessToken = require("../utils/generateAccessToken");

async function employeeSignin(req, res) {
  const { email, password } = req.body;
  const user = await Employee.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  const accessToken = generateAccessToken({ email: user.email });

  return res.status(200).json({
    message: "User signed in successfully",
    user,
    accessToken,
  });
}

async function employeeSignUp(req, res) {
  const employee = await Employee.create(req.body);
  res.status(200).json(employee);
}

function applyForLeave(req, res) {
  // endpoint for processing employee leave application
}

function uploadPhoto(req, res) {
  const uploadedPhoto = req.file;
  if (!uploadedPhoto) {
    return res.status(400).json({
      error: "No file provided",
    });
  } else {
    return res.status(200).json(req.file);
  }
}

module.exports = {
  employeeSignin,
  applyForLeave,
  employeeSignUp,
  uploadPhoto,
};
