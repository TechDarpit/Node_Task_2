const express = require("express");

const userController = require("../controller/user");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// router.post("/signup", userController.signUp);

// router.post("/signin", userController.signIn);

// router.get("/userData", isAuth, userController.getUserData);

// router.put("/updateProfile", isAuth, userController.updateProfile);

// router.delete("/deleteProfile", isAuth, userController.deleteProfile);

module.exports = router;
