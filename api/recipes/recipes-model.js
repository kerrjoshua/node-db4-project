

function getById(recipe_id) {
    return Promise.resolve(`Awesome recipe with id ${recipe_id}!`)
}

module.exports = { getById, } 