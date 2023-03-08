const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");


router.post("/register",userControllers.register);
router.post("/login",userControllers.logIn)
router.post("/logout",userControllers.logOut)

module.exports = router