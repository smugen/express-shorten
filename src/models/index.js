const mongoose = require('mongoose');

const shortSchema = new mongoose.Schema({
  short: {
    type: String,
    required: true,
    unique: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Short = mongoose.model('Short', shortSchema);

exports.Short = Short;
