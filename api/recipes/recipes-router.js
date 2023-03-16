const express = require('express')
const router = express.Router()
const Recipes = require('./recipes-model')

router.get('/:recipe_id', (req, res, next) => {
    Recipes.getById(req.params.recipe_id)
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

router.use('*', (req, res) => {
    res.json('Hello from recipes router.')
})

router.use('*', (err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'something went wrong inside the recipes router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;