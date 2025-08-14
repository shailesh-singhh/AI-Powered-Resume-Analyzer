// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const paymentRoutes = require('./routes/payment'); // <--- add this line
// const resumeRoutes = require('./routes/resume');
// app.use('/api/resume', resumeRoutes);
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Mount payment routes at /api/payment
// app.use('/api/payment', paymentRoutes);

// // ... other routes (for resume upload, analysis, etc.)

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// // });
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const resumeRoutes = require('./routes/resume');
// const paymentRoutes = require('./routes/payment');

// const app = express(); // <-- Make sure this is at the top

// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(bodyParser.json());

// // Register your routes after 'app' is created!
// app.use('/api/resume', resumeRoutes);
// app.use('/api/payment', paymentRoutes);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/resume-analyzer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));


const resumeRoutes = require('./routes/resume');

const paymentRoutes = require('./routes/payment');

const app = express(); // <-- Make sure this is at the top

const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000", // React frontend
  credentials: true
}));
app.use(cors());
app.use(bodyParser.json());

// Register your routes after 'app' is created!
app.use('/api/resume', resumeRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});