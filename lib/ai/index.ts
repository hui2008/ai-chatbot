import { createOpenAI } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

const provider = createOpenAI({
  baseURL: process.env.TEXT_GEN_BASE_URL,
  apiKey: process.env.TEXT_GEN_API_KEY,
  compatibility: 'compatible',
})

const model = provider.languageModel(process.env.TEXT_GEN_MODEL || 'llama-3.1-70b-versatile');
console.log('model', model);

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model,
    middleware: customMiddleware,
  });
};
