const Task = require("../models/model").Task;
const User = require("../models/model").User;

exports.getActiveUsers = async (req, res, next) => {
  try {
    const activeUsers = await User.findAll({
      where: { userStatus: true },
      attributes: ["uId", "firstName", "lastName"],
    });
    // console.log(activeUsers);
    if (!activeUsers) {
      const error = new Error("Active users could not be found.");
      error.statusCode = 404;
      throw error;
    }
    res.status(201).json(activeUsers);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  console.log("Clll");
  const { title, uId, dueDate } = req.body;
  const taskCreate = {
    title,
    dueDate,
    userUId: uId,
  };
  try {
    // const findUser = await User.findOne({ where: { email: email } });
    // if (findUser) {
    //   const error = new Error("A user with this email aready exists.");
    //   error.statusCode = 409;
    //   throw error;
    // }
    const task = await Task.create(taskCreate);
    // console.log(task);
    res.status(200).json({ task: task });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName"],
          required: true,
        },
      ],
    });
    // console.log(tasks);
    if (!tasks) {
      const error = new Error("A tasks could not be found.");
      error.statusCode = 404;
      throw error;
    }
    // console.log(tasks);
    res.status(201).json(tasks);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getTask = async (req, res, next) => {
  const tId = req.params.tId;

  try {
    const task = await Task.findOne({
      where: { tId: tId },
      include: [
        {
          model: User,
          attributes: ["firstName", "lastName"],
          required: true,
        },
      ],
    });
    // console.log(tasks);
    if (!task) {
      const error = new Error("A task with this id could not be found.");
      error.statusCode = 404;
      throw error;
    }
    // console.log(tasks);
    res.status(201).json(task);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  const tId = req.params.tId;
  try {
    const response = await Task.destroy({ where: { tId: tId } });
    if (!response) {
      const error = new Error("A user with this id could not be found.");
      error.statusCode = 404;
      throw error;
    }
    // console.log(response);
    // console.log(uId + " deleted.");
    res.status(200).json({ delTaskId: tId });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateTask = async (req, res, next) => {
  const tId = req.params.tId;
  const { title, uId, dueDate, taskStatus } = req.body;
  const taskCreate = {
    title,
    dueDate,
    taskStatus,
    userUId: uId,
  };

  try {
    const response = await Task.update(taskCreate, { where: { tId: tId } });
    // console.log(!!response[0]);
    if (!response[0]) {
      const error = new Error("A task with this id could not be found.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "Task Updated!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
