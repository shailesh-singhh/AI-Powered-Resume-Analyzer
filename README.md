# AI Resume Analyzer (MERN Full Stack)

This project lets users upload a resume (PDF/DOCX), pay ₹1 via UPI, and get AI-powered analysis and rating (0-100).  
Tech: React + Ant Design, Express + MongoDB, OpenAI, Razorpay.

## Setup

### Backend
1. `cd server`
2. `npm install`
3. Set your OpenAI & Razorpay API keys in `utils/analyzer.js` and `utils/payment.js`.
4. `node app.js`

### Frontend
1. `cd client`
2. `npm install`
3. `npm start`

## Features
- Resume upload (PDF/DOCX)
- UPI payment gateway (QR/Scanner)
- AI analysis (grammar, format, skills, projects, etc.)
- Beautiful, modern UI

## Note
- AI code uses OpenAI, you can swap for Hugging Face.
- Payment is scaffolded with Razorpay, replace with Paytm or Cashfree if desired.

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