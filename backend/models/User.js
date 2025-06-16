const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    phone: {
      type: String
    },
    dob: {
      type: Date
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other']
    },
    address: {
      type: String
    },
    diseases: {
      type: [String]
    },
    otherDisease: {
      type: String
    },
    description: {
      type: String
    },
    home_search: {
      type: String,
      enum: ['yes', 'no']
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
