const User = require("../models/model").User;

exports.createUser = async (req, res, next) => {
  const { firstName, lastName, email, userStatus } = req.body;
  const userCreate = {
    firstName,
    lastName,
    email,
    userStatus,
  };
  try {
    const findUser = await User.findOne({ where: { email: email } });
    if (findUser) {
      const error = new Error("A user with this email aready exists.");
      error.statusCode = 409;
      throw error;
    }
    const user = await User.create(userCreate);
    // console.log(user);
    res.status(200).json({ message: "User created!", user: user });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    if (!users) {
      const error = new Error("A users could not be found.");
      error.statusCode = 404;
      throw error;
    }
    // console.log(users);
    res.status(201).json(users);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  const uId = req.params.uId;
  //   console.log(uId);
  try {
    const user = await User.findByPk(uId);
    // console.log(users);
    if (!user) {
      const error = new Error("A user with this id could not be found.");
      error.statusCode = 404;
      throw error;
    }
    res.status(201).json(user);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const uId = req.params.uId;
  try {
    const response = await User.destroy({ where: { uId: uId } });
    if (!response) {
      const error = new Error("A user with this id could not be found.");
      error.statusCode = 404;
      throw error;
    }
    // console.log(response);
    // console.log(uId + " deleted.");
    res.status(200).json({ delUserId: uId });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  const uId = req.params.uId;
  const { firstName, lastName, email, userStatus } = req.body;
  console.log(uId);
  const updatedUser = {
    firstName,
    lastName,
    email,
    userStatus,
  };

  try {
    const response = await User.update(updatedUser, { where: { uId: uId } });
    console.log(!!response[0]);
    if (!response[0]) {
      const error = new Error("A user with this id could not be found.");
      error.statusCode = 404;
      throw error;
    }
    res.status(200).json({ message: "User Profile Updated!" });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
