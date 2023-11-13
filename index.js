const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.get('/', (req, res) => res.redirect('/quote'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})