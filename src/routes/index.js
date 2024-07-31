const express = require('express');
const routerCountry = require('./country.router');
const routerCite = require('./cite.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/countries',routerCountry)
router.use('/cites',routerCite)

module.exports = router;