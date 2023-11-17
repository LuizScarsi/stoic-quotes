const OpenAI = require('openai')
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

async function getQuoteReflection(quote) {
    const chatCompletion = await openai.chat.completions.create({
        model: process.env.GPT_MODEL,
        messages: [{role: "user", content: "Give me a reflection for this stoic quote" + quote}]
    })
    
    return chatCompletion
}

module.exports = {getQuoteReflection}