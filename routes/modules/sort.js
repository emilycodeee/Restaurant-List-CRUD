const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/name', (req, res) => {
  return Restaurant.find()
    .lean()
    .sort({ name: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/category', (req, res) => {
  return Restaurant.find()
    .lean()
    .sort({ category: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/rating', (req, res) => {
  return Restaurant.find()
    .lean()
    .sort({ rating: 'desc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get('/creation', (req, res) => {
  return Restaurant.find()
    .lean()
    .sort({ _id: 'desc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

module.exports = router