// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })
const Restaurant = require('./models/restaurant')

// require express-handlebars && restaurant-data
const exphbs = require('express-handlebars')

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

// setting static files
app.use(express.static('public'))

// routes setting - Read
app.get('/', (req, res) => {
  return Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// routes setting - Create

app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

app.post('/restaurants', (req, res) => {
  const restaurant = req.body
  // console.log(restaurant)
  return Restaurant.create(restaurant)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})


// app.post('/todos', (req, res) => {
//   const name = req.body.name
//   // const todo = New Todo ({name})
//   // return todo.save()
//   //     .then(()=> res.redirect('/'))
//   //     .catch(error => console.log(error))
//   return Todo.create({ name })
//     .then(() => res.redirect('/'))
//     .catch(error => console.log(error))
// })

// app.post('./restaurants/new')


// routes setting - Update

// routes setting - Delete



// show-page
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// search-bar
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  console.log(keyword)
  Restaurant.find({
    $or: [
      { name: new RegExp(keyword, 'i') },
      { category: new RegExp(keyword, 'i') },
    ],
  })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening `)
})