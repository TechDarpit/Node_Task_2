const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    address1: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: Number, required: true },
  },
  hobbies: [
    {
      type: String,
    },
  ],
  mobileNumber: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
