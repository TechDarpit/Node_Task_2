const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(cors());

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const taskRoutes = require("./routes/task");

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/task", taskRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

const sequelize = require("./models/model").sequelize;

const port = 8080;

sequelize
  .sync()
  .then((result) => {
    app.listen(port);
    console.log("Connect");
  })
  .catch((err) => console.log(err));

console.log(`App Started on port number ${port}`);
