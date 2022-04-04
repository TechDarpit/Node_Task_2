const express = require("express");

const userController = require("../controller/user");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/createuser", userController.createUser);

router.get("/getUsers", userController.getUsers);

router.get("/:uId", userController.getUser);

router.delete("/:uId", userController.deleteUser);

router.put("/:uId", userController.updateUser);

module.exports = router;
