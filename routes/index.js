const router = require('express').Router();
const paket = require('./package.js')

router.use('/package', paket)

module.exports = router