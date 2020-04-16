const express = require("express")

const Recipe = require("./recipe-model.js")

const router = express.Router()

router.get('/ingredients', (req, res) => {
    Recipe.findIn()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
        res.status(500).json({message: "Error retrieving the recipes"})
    })
})

router.get("/:id/ingredients", (req, res) => {
   const {id} = req.params
   Recipe.findIngredients(id)
   .then (item => {
       if(item.length) {
           res.status(200).json(item)
       } else {
           res.status(404).json({message: "Could not find ingredients with that ID"})
       }
   })
   .catch(err => {
       res.status(500).json({message: "Failed to get ingredients"})
   })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Recipe.findById(id)
    .then(item => {
      if (item) {
        res.json(item);
      } else {
      res.status(404).json({message: "Can not find the given"})
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });
  

router.get("/:id/instructions", (req, res) => {
    const {id} = req.params
    Recipe.findInstructions(id)
    .then (item => {
        if(item.length) {
            res.status(201).json(item)
        } else {
            res.status(404).json({message: "Could not find ingredients with that ID"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "Failed to get ingredients"})
    })
 })

module.exports = router