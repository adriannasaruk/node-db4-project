const knex = require("knex")
const knexfile = require("../knexfile.js")
const db = knex(knexfile.development)

module.exports ={
    getRecipes,
    findIn,
    findById,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db("recipes")
}

function findById(id){
    return db("recipes").where({id}).first()
}

function findIn(){
    return db("ingredients")
}

function getShoppingList(id) {
    return db.select("ingredients.name", "ingredients.quantity").from("ingredients")
    .join("recipes", "ingredients.recipe_id", "recipes.id")
    .where("ingredients.recipe_id", id)
}

function getInstructions(id) {
    return db.select("instructions.step1", "instructions.step2", "instructions.step3").from("instructions")
    .join("recipes", "instructions.recipe_id", "recipes.id")
    .where("instructions.recipe_id", id)
}