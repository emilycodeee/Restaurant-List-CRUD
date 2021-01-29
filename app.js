// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const Restaurant = require('./models/restaurant')

// require express-handlebars && restaurant-data
const exphbs = require('express-handlebars')
const restaurant = require('./models/restaurant')

//setting mongodb connection
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting bodyParser
app.use((bodyParser.urlencoded({ extended: true })))
app.use(methodOverride('_method'))
// setting static files
app.use(express.static('public'))
// routes setting - Read
app.use(routes)




// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})