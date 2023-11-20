const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const quote = require('./routes/quote')
const exphbs = require('express-handlebars')
const path = require('path')

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => res.redirect('/quote'))

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.use('/quote', quote.router)