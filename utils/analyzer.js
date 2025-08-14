const pdfParse = require('pdf-parse');

// Example usage in analyzer.js
const mammoth = require('mammoth');

async function extractDocxText(filePath) {
  const result = await mammoth.extractRawText({path: filePath});
  return result.value;
}
// const docxParser = ...  // Use a suitable DOCX parser
const axios = require('axios');

async function analyzeResume(filePath) {
  // Simplified: parse text, send to OpenAI for analysis
  let text = '';
  if (filePath.endsWith('.pdf')) {
    const dataBuffer = require('fs').readFileSync(filePath);
    text = (await pdfParse(dataBuffer)).text;
  } else if (filePath.endsWith('.docx')) {
    // TODO: Use docx parser to extract text
    text = '...'; // Replace with actual extraction
  }

  //
  const prompt = `Analyze the following resume text. Return ONLY a valid JSON object with these keys: grammar, spelling, format, skills, completeness, projects, experience, suggestions, score (0-100).\n\nResume:\n${text}`;


const { data } = await axios.post('https://api.openai.com/v1/chat/completions', {
  model: 'gpt-4o',
  messages: [{ role: 'user', content: prompt }]
}, {
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  },
}
);


  // Parse AI response (assume structured JSON)
const response = data.choices[0].message.content;

  console.log('✅ OpenAI response:', response);

  try {
    return JSON.parse(response);
  } catch (error) {
    console.error('❌ Failed to parse OpenAI response as JSON');
    console.error(response);
    throw new Error('OpenAI response is not valid JSON.');
  }
}

module.exports = { analyzeResume };