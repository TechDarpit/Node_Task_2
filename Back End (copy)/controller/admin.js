const Admin = require("../models/model").Admin;

const jwt = require("jsonwebtoken");

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({
      where: { email: email, password: password },
    });
    // console.log(admin);
    if (!admin) {
      const error = new Error("Email I'd or Password Invalid!");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign(
      {
        email: admin.email,
      },
      "somesupersecretsecret",
      { expiresIn: "1h" }
    );
    res.status(200).json({ token: token });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
