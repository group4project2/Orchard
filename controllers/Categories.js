const express = require('express');
const category = express.Router();

const Category = require('../models/Category');

category.post('/types', (req, res) => {
    Category.create({
        name: req.body.name
    })
    .then(user => {
        res.json({ status: 'Item added!' })
      })
      .catch(err => {
        res.send('error: ' + err)
      });
})

category.get('/items', function (req, res) {
  // replace old function with sequelize function
  Category.findAll(
    
  )
    // use promise method to pass the Inventory...
    .then(function (dbCategory) {
      // into the main index, updating the page
      console.log(dbCategory);
      res.json(dbCategory);
    })
    .catch(err => {
      res.send('error : ' + err);
    });
});

module.exports = category;