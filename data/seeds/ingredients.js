
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: "Banana", quantity: 5, recipe_id: 1},
        {name: "Chocolate Chips", quantity: 50, recipe_id: 1},
        {name: "Cream Cheese", quantity: 1, recipe_id: 2},
        {name: "Blueberry", quantity: 100, recipe_id: 3},
        {name: "Eggs", quantity: 3, recipe_id: 3}
      ]);
    });
};
