const express = require('express');
const item = express.Router();

const Item = require('../models/Item');

// Route        POST api/items
// Description  Add Item to DB
item.post('/items', (req, res) => {
  // Storing req.body for cleanliness and readability
  const userInput = req.body;
  // Creating a new item with user input
  Item.create({
    name: userInput.name,
    // quantity: userInput.quantity,
    // price: userInput.price,
    // date_received: userInput.date_received,
    // exp_date: userInput.exp_date,
  })
    // If successful, send status code and status message that can be used on front end to alert user of success
    .then((item) => res.status(201).json({ status: 'Item added!' }))
    // If error, send status code and message as above
    .catch((err) =>
      res.status(500).json({ status: `Server Error: ${err}` }),
    );
});

// Route        GET api/items
// Description  Get all items from DB
item.get('/items', (req, res) => {
  Item.findAll()
    // If successful, send status code and json object of all items in db
    .then((dbItem) => res.status(200).json(dbItem))
    // If error, send status code and message
    .catch((err) =>
      res.status(500).json({ status: `Server Error: ${err}` }),
    );
});

// Route        PUT api/items/:id
// Description  Update specific item in db
item.put('/:id', (req, res) => {
  // Storing req.body for cleanliness and readability
  const userInput = req.body;
  // Find item by id and update it with new user input
  Item.update(
    {
      name: userInput.name,
      quantity: userInput.quantity,
      price: userInput.price,
      date_received: userInput.date_received,
      exp_date: userInput.exp_date,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  )
    // If successful, send status code and message
    .then((dbItem) =>
      res.status(200).json({ status: 'Item updated!' }),
    )
    // If error, send status code and message
    .catch((err) =>
      res.status(500).json({ status: `Server Error: ${err}` }),
    );
});

// Route        DELETE api/items/:id
// Description  Delete a specific item from db
item.delete('/:id', (req, res) => {
  Item
    // Find item by id and delete it
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    // If successful, send status code and message
    .then((dbItem) =>
      res.status(200).json({ status: 'Item removed!' }),
    )
    // If error, send status code and message
    .catch((err) =>
      res.status(500).json({ status: `Server Error: ${err}` }),
    );
});

module.exports = item;
