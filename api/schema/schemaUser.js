const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jwt-simple');
const config = require('../config/config');

const userSchema = mongoose.Schema(
  {
    username: { 
      type: String,
      lowercase: true,
      trim: true,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

userSchema.methods = {
  authenticate: async function (password) {
    return await bcrypt.compare(password, this.password,);
  },
  getToken: function () {
    return jwt.encode(this, config.secret);
  },
};

module.exports = mongoose.model('User', userSchema);