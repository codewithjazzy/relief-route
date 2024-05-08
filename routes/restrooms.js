const express = require("express");
const router = express.Router();
const restroomsController = require("../controllers/restrooms");
const { ensureAuth } = require("../middleware/auth"); 

//home page
router.get("/home", restroomsController.getHome);
//find restrooms
router.post("/findRestroom", restroomsController.findRestroom);
//selected restroom
router.get("/getChoice/:id", restroomsController.getChoice)
//upvote a restroom
router.put("/upvoteRestroom/:id", ensureAuth, restroomsController.upvoteRestroom);
//downvote a restroom
router.put("/downvoteRestroom/:id", ensureAuth, restroomsController.downvoteRestroom);


module.exports = router;
// //flag a restroom as closed
// router.put("/flagRestroom/:id", restroomsController.flagRestroom)


 