const axios = require('axios')
const Quote = require('../models/Quote')

const maxId = 402

async function getRandomQuote() {
    const randomId = Math.floor(Math.random() * maxId) + 1
    return getQuoteById(randomId)
}

async function getQuoteById(id) {
    try {
        const reqConfig = {
            data: {
                id: assureValidId(id)
            }
        }
        return axios
        .get('https://stoic-api.vercel.app/api/quote', reqConfig)
        .then(response => retrieveData(response.data.data))
        .catch(error => {
            if(error.response) {
                console.log('ERROR: Too many attempts')
                return null
            }
        })
    } catch(error) {
        console.log(error)
        return null
    }
}

function retrieveData(data) {
    const {id, author, quote, source} = data
    const quoteData = new Quote(id, author, quote, source)
    return quoteData
}

function assureValidId(id) {
    // Always returns a valid ID
    return id % (maxId+1)
}

module.exports = {getQuoteById, getRandomQuote}