const express = require('express');
const router = express.Router();

// POST /api/payment/initiate
router.post('/initiate', (req, res) => {
  const { resumeId } = req.body;
  // For testing, return a dummy QR code or payment link
  res.json({ payUrl: 'https://via.placeholder.com/256?text=Fake+QR' });
});

// GET /api/payment/status
router.get('/status', (req, res) => {
  // For testing, always say "paid"
  res.json({ status: 'paid' });
});

module.exports = router;