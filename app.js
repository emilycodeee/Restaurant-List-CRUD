// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')

// require routes & config profile
const routes = require('./routes')
require('./config/mongoose')


// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting bodyParser
app.use((bodyParser.urlencoded({ extended: true })))
// setting method-override
app.use(methodOverride('_method'))
// setting static files
app.use(express.static('public'))
// routes setting - Read
app.use(routes)

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})