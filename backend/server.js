const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
//newpart

const  OpenAI  = require('openai');




const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
  });
// end of new part



// Middleware
app.use(cors());
app.use(express.json());

// POST route to handle form submission
app.post('/custom', async (req, res) => {
  const { budget, useCase } = req.body;

  const prompt = `My budget is ${budget} rupees and I need a PC for ${useCase}. Please suggest components.`;

  try {
    // const response = await axios.post(
    //   'https://api.openai.com/v1/chat/completions',
    //   {
    //     model: 'gpt-4',
    //     messages: [
    //       { role: 'system', content: 'You are a helpful assistant.' },
    //       { role: 'user', content: prompt },
    //     ],
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,    
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
// New
const chatCompletion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [{"role": "user", "content": "Hello!"}],
})

 console.log(chatCompletion.choices[0].message);

    // res.json({ result: response.data.choices[0].message.content });
  } catch (error) {
    console.error('Error with ChatGPT API:', error);
    res.status(500).json({ error: 'Failed to fetch data from ChatGPT API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
