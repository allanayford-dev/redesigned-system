const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/user-profile", userController.userProfile);

module.exports = router;