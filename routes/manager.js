const express = require( 'express' );
const router = express.Router();
const asyncHandler = require('express-async-handler')

const { managerSignIn, getAllEmployees } = require("../controllers/manager");

router.get("/getEmployees", asyncHandler(getAllEmployees));
router.post("/signin", asyncHandler(managerSignIn));

module.exports = router;