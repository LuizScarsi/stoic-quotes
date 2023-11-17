const express = require('express')
const router = express.Router()
const quoteController = require('../controllers/quoteController')
const openAIController = require('../controllers/openAIController')

router.get('/', async (req, res) => {
    const quoteData = await quoteController.getRandomQuote()
    const quoteReflection = await openAIController.getQuoteReflection(quoteData.quote)
    if (!quoteData) return
    res.send(quoteData, quoteReflection)
})

router.get('/id/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const quoteData = await quoteController.getQuoteById(id)
        const quoteReflection = await openAIController.getQuoteReflection(quoteData.quote)
        if (!quoteData) return
        res.send(quoteData, quoteReflection)
    } catch(error) {
        res.redirect('/')
    }
})

module.exports = {router}