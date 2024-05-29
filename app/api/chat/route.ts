// import openai from '@/app/lib/openai'
// import { OpenAIStream, StreamingTextResponse, streamText } from 'ai'
// import { NextResponse } from 'next/server'


// export async function POST(req: Request) {
//   try {
//     if (!process.env.OPENAI_API_KEY) {
//       return new NextResponse('Missing OpenAI API Key.', { status: 400 })
//     }

//     const { messages } = await req.json()
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       stream: true,
//       messages
//     })

//     const stream = OpenAIStream(response)
//     return new StreamingTextResponse(stream)
    
//   } catch (error: any) {
//     return new NextResponse(error.message || 'Something went wrong!', {
//       status: 500
//     })
//   }

// }