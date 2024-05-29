import OpenAI from 'openai'

export const runtime = 'edge'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' })

export default openai;