const express = require("express");

const taskController = require("../controller/task");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.get("/activeUsers", taskController.getActiveUsers);

router.post("/createtask", taskController.createTask);

router.get("/getTasks", taskController.getTasks);

router.get("/:tId", taskController.getTask);

router.delete("/:tId", taskController.deleteTask);

router.put("/:tId", taskController.updateTask);

module.exports = router;
