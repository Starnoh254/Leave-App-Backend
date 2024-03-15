const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const {
  employeeSignin,
  applyForLeave,
  employeeSignUp,
  uploadPhoto,
} = require("../controllers/employee");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniquePrefix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload_photo", upload.single("image"), uploadPhoto);

router.post("/signin", asyncHandler(employeeSignin));
router.post("/leaveApplication", asyncHandler(applyForLeave));
router.post("/signup", asyncHandler(employeeSignUp));

module.exports = router;
