require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Home')
  })
  

app.get('*', (req, res) => {
  res.send('Error 404')
})

app.listen(process.env.PORT)
