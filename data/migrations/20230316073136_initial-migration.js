/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema
        .createTable('Recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.string('recipe_name', 300)
                .notNullable()
                .unique()
        })
        .createTable('Ingredients', tbl => {
            tbl.increments('ing_id')
            tbl.string('ing_name', 128)
                .notNullable()
                .unique()
        })
        .createTable('Steps', tbl => {
            tbl.increments('step_id')
            tbl.integer('step_number')
                .notNullable()
                .unsigned()
            tbl.string('step_instructions')
                .notNullable()
            tbl.integer('recipe_id')
                .notNullable()
                .unsigned()
                .references('recipe_id')
                .inTable('Recipes')
        })
        .createTable('Step_Ingredients', tbl => {
            tbl.increments('step_ing_id')
            tbl.integer('step_id')
                .notNullable()
                .unsigned()
                .references('step_id')
                .inTable('Steps')
            tbl.integer('ing_id')
                .notNullable()
                .unsigned()
                .references('ing_id')
                .inTable('Ingredients')
            tbl.decimal('quantity')
                .notNullable()
                .unsigned()
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    knex.schema
        .dropTableIfExists('Step_Ingredients')
        .dropTableIfExists('Steps')
        .dropTableIfExists('Ingredients')
        .dropTableIfExists('Recipes')
};
