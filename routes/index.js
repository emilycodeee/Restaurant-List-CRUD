const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)
const restaurants = require('./modules/restaurants')
router.use('/restaurants', restaurants)

module.exports = router