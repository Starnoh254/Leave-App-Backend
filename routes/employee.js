const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const {
  employeeSignin,
  applyForLeave,
  employeeSignUp,
} = require("../controllers/employee");

router.post("/signin", asyncHandler(employeeSignin));
router.post("/leaveApplication", applyForLeave);
router.post("/signup", asyncHandler(employeeSignUp));

module.exports = router;
