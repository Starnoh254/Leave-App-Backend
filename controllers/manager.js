const Manager = require('../models/managerModel')
async function managerSignIn(req, res) {
  const { email, password } = req.body;

  const user = await Manager.findOne({ email });

  if (!user) return res.status(401).json({ error: "Email not found." });
  // compare the password of this user with the password that was sent in the request body

  if (user.password !== password) {
    return res.status(401).json({ error: "Invalid Password" });
  } else {
    const user2 = {
      email: user.email,
    };
    const accessToken = generateAccessToken(user2);

    return res.status(200).json({
      message: "User signed in successfully",
      user,
      accessToken,
    });
  }
}

function viewAllLeaveApplications(req, res) {}

function approveLeaveRequest(req, res) {}

function denyLeaveRequest(req, res) {}
