const Employee = require('../models/employeeModel')

function employeeSignin(req, res) {
  const { email, password } = req.body;
  Employee.findOne({ email }).then((user)=> {
    if (!user) return res.status(401).send({ error: "Email not found." });
    // compare the password of this user with the password that was sent in the request body
    if (user.password !== password)
      return res.status(401).send({ error: "Invalid Password" });
    else {
      return res.status(200).send({
        message: "User signed in successfully",
        user,
      });
    }
  }).catch(err => res.status(500).send({error: "Internal Error"}))
    

}

function applyForLeave(req, res) {
  // endpoint for processing employee leave application

}


module.exports = {
  employeeSignin,
  applyForLeave
};