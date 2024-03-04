const Employee = require("../models/employeeModel");
const  generateAccessToken  = require('../utils/generateAccessToken')

async function employeeSignin(req, res) {
  
  const { email, password } = req.body;
  
  const user = await Employee.findOne({ email });
  
  if (!user) return res.status(401).json({ error: "Email not found." });
  // compare the password of this user with the password that was sent in the request body
  
  if (user.password !== password){
    return res.status(401).json({ error: "Invalid Password" });
  }
  else {
    const user2 = {
      email : user.email
    }
    const accessToken = generateAccessToken(user2)
    
    return res.status(200).json({
      message: "User signed in successfully",
      user,
      accessToken
    });
  }

}

async function employeeSignUp(req, res) {
  const { firstName, lastName, email, password } = req.body;
  const employee = await Employee.create({
    firstName,
    lastName,
    email,
    password,
  });
  console.log(employee);
  res.status(200).json(employee);
}

function applyForLeave(req, res) {
  // endpoint for processing employee leave application
}

module.exports = {
  employeeSignin,
  applyForLeave,
  employeeSignUp,
};
