import axios from 'axios';

const openAI = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer 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`
  }
});

export default openAI;
