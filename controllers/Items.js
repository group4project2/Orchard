const express = require('express');
const item = express.Router();
const Item = require('../models/Items');
const Items = require('../models/Items');

item.get('/items', function (req, res) {
  Items.findAll()
    .then(function (dbItem) {
      res.json(dbItem);
    })
    .catch(function (error) {
      res.send(error);
    });
});

item.post('/', function (req, res) {
  Item.create().then(function (item) {
    res.json({ status: 'Item Added!' });
  })
  .catch(function(error){

res.send('error:'+ error);

  
  });

module.exports = item;
