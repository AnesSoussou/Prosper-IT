import axios from 'axios';

const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
  }
});

export default openAI;
