// const Sequelize = require("sequelize");
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Admin_System', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  logging: false,
});

const Admin = sequelize.define('admin', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const User = sequelize.define(
  'user',
  {
    uId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  { timestamps: false }
);
const Task = sequelize.define(
  'task',
  {
    tId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    taskStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { timestamps: false }
);

Task.belongsTo(User);
User.hasMany(Task);

exports.Admin = Admin;
exports.User = User;
exports.Task = Task;
exports.sequelize = sequelize;
