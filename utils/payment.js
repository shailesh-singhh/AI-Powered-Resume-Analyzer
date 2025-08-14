// // Example using Razorpay (UPI QR)
// const Razorpay = require('razorpay');
// const instance = new Razorpay({
//   key_id: 'YOUR_RAZORPAY_KEY',
//   key_secret: 'YOUR_RAZORPAY_SECRET'
// });
// const paymentStatus = {};

// async function createUPIPayment(resumeId) {
//   const order = await instance.orders.create({
//     amount: 100, // 1 Rupee in paise
//     currency: 'INR',
//     receipt: `resume_${resumeId}`,
//     payment_capture: 1
//   });
//   paymentStatus[resumeId] = 'pending';
//   // Generate UPI QR code or payment link
//   return `https://razorpay.com/pay/${order.id}`; // Replace with actual QR generation or UPI deep link
// }

// async function checkPaymentStatus(resumeId) {
//   // Poll Razorpay for payment status (simulate for scaffold)
//   // TODO: Integrate with Razorpay API to check payment
//   return paymentStatus[resumeId] === 'paid' ? 'paid' : 'pending';
// }

// module.exports = { createUPIPayment, checkPaymentStatus };

// Razorpay code removed/bypassed for testing

// Simulate payment status as always paid
const paymentStatus = {};

async function createUPIPayment(resumeId) {
  // No payment created, immediately mark as paid
  paymentStatus[resumeId] = 'paid';
  // Return a dummy payment link or message
  return "Payment bypassed for testing. Resume analysis unlocked.";
}

async function checkPaymentStatus(resumeId) {
  // Always return 'paid'
  return 'paid';
}

module.exports = { createUPIPayment, checkPaymentStatus };