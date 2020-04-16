
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step1: "Mix Banana and Chocolate Chips", step2: "Bake it at 350 degrees", step3: "eat it", recipe_id: 1},
        {step1: "Mix Cream Cheese", step2: "Put it in the Oven", step3: "wait for it", recipe_id: 2},
        {step1: "Mix Blueberry and Eggs", step2: "Don't bake it, it's not good", step3: "Don't eat it", recipe_id: 3}
      ]);
    });
};
