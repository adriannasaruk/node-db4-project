
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: "Banana Bread"},
        {name: "Mango Cheesecake"},
        {name: "Blueberry Muffin"}
      ]);
    });
};
