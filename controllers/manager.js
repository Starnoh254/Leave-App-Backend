const Manager = require("../models/managerModel");
const Employee = require("../models/employeeModel");

async function managerSignIn(req, res) {
  const { email, password } = req.body;

  const user = await Manager.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: "Email not found." });
  }

  if (user.password !== password) {
    return res.status(401).json({ error: "Invalid Password" });
  }
  const { email: userEmail } = user;
  const accessToken = generateAccessToken({ email: userEmail });

  return res.status(200).json({
    message: "User signed in successfully",
    user,
    accessToken,
  });
}

function viewAllLeaveApplications(req, res) {}

function approveLeaveRequest(req, res) {}

function denyLeaveRequest(req, res) {}

async function getAllEmployees(req, res) {
  const employees = await Employee.find();
  return res.status(200).json({ employees });
}

module.exports = {
  managerSignIn,
  getAllEmployees
}