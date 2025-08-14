const express = require('express');
const multer = require('multer');
const Resume = require('../models/Resume');
const { analyzeResume } = require('../utils/analyzer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('resume'), async (req, res) => {
  const resume = new Resume({ fileUrl: req.file.path });
  await resume.save();
  res.json({ resumeId: resume._id });
});

router.get('/result/:id', async (req, res) => {
  const resume = await Resume.findById(req.params.id);
  if (resume.analysis) {
    res.json(resume.analysis);
  } else if (resume.status === 'paid' || true) {
    // Run AI analysis
    const analysis = await analyzeResume(resume.fileUrl);
    resume.analysis = analysis;
    resume.status = 'analyzed';
    await resume.save();
    res.json(analysis);
  } else {
    res.status(403).json({ error: 'Payment not completed.' });
  }
});

module.exports = router;