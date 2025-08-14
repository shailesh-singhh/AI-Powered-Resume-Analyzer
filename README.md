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

## Screensorts
1.Upload Resume
<img width="1024" height="1536" alt="Upload Resume" src="https://github.com/user-attachments/assets/a2310092-c137-4648-93ef-050c822ec630" />


2. Pay To Analyze
   <img width="1024" height="1536" alt="Payment" src="https://github.com/user-attachments/assets/68c97c03-a760-44d5-b64a-20ca68ff86cd" />
  
3. Analyzed  Ats Report
<img width="1024" height="1536" alt="AnalyzedReport" src="https://github.com/user-attachments/assets/48101d28-af0f-4c85-8f6a-f946f2c81283" />

