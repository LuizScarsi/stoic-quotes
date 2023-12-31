const express = require('express')
const router = express.Router()
const quoteController = require('../controllers/quoteController')

router.get('/', async (req, res) => {
    const quoteData = await quoteController.getRandomQuote()
    if (!quoteData) return
    res.render('index', {quote: quoteData})
})

router.get('/id/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const quoteData = await quoteController.getQuoteById(id)
        if (!quoteData) return
        res.render('index', {quote: quoteData})
    } catch(error) {
        res.redirect('/')
    }
})

module.exports = {router}