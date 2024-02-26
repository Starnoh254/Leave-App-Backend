const express = require("express");
const router = express.Router();
const { employeeSignin, applyForLeave } = require("../controllers/employee");

router.post("/signin" , employeeSignin);
router.post("/leaveApplication",applyForLeave)

module.exports = router
