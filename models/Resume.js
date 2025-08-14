const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  fileUrl: String,
  status: { type: String, default: 'uploaded' }, // uploaded, paid, analyzed
  analysis: Object
});

module.exports = mongoose.model('Resume', ResumeSchema);