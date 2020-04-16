
exports.up = function(knex) {
 return knex.schema.createTable("recipes", tbl => {
     tbl.increments()
     tbl.string("name", 255).unique()
 })
 .createTable("ingredients", tbl => {
     tbl.increments()
     tbl.string("name", 255).unique()
     tbl.float("quantity",255)
     tbl.integer("recipe_id", 255)
     .notNullable()
     .references("id")
     .inTable("recipes")
 })
 .createTable("instructions", tbl => {
    tbl.increments()
    tbl.string("step1", 255)
    tbl.string("step2",255)
    tbl.string("step3", 255)
    tbl.integer("recipe_id", 255)
    .notNullable()
    .references("id")
    .inTable("recipes")
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists("recipes")
};
