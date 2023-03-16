const express = require('express')
const router = express.Router()

router.use('*', (req, res) => {
    res.json('Hello from recipes router.')
})

router.get('*', (err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;