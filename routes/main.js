const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const restroomsController = require("../controllers/restrooms.js");
const { ensureAuth } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/home", restroomsController.getHome)
router.get("/profile", ensureAuth, restroomsController.getProfile);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);

module.exports = router;






// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);




