const router = require('express').Router();
var db = require('../../models');
// get route -> index
router.get('/', function (req, res) {
  //do things here for other routes
});

// get route, edited to match sequelize
router.get('/item', function (req, res) {
  // replace old function with sequelize function
  db.Item.findAll({
    // Here we specify we want to return our Inventory in ordered by ascending Inventory_name
    order: [['name', 'ASC']],
  })
    // use promise method to pass the Inventory...
    .then(function (dbItem) {
      // into the main index, updating the page
      console.log(dbItem);
      var hbsObject = {
        item: dbItem,
      };
      //I'M NOT USING HANDLEBARS! WE CANT USE THIS.
      // return res.render('index', hbsObject);
      return res.json(dbItem);
    });
});

// post route to create Inventory
router.post('/add', function (req, res) {
  // edited Inventory create to add in a Inventory_name
  db.Item.create({
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price,
    date_received: req.body.date_received,
    exp_date: req.body.exp_date,
    categoryID: req.body.categoryID
  })
    // pass the result of our call
    .then(function (dbInventory) {
      // log the result to our terminal/bash window
      console.log(dbInventory);
      // redirect
      res.redirect('/');
    }).catch(function (err) {
      // log the result to our terminal/bash window
      res.send(err)
      // redirect
    });
});

// // put route to devour a Inventory
// router.put('/Inventory/update', function (req, res) {
//   // If we are given a customer, create the customer and give them this devoured Inventory
//   if (req.body.inventory) {
//     db.Iventory.create({
//       customer: req.body.customer,
//       InventoryId: req.body.Inventory_id,
//     })
//       .then(function (dbCustomer) {
//         return db.Inventory.update(
//           {
//             devoured: true,
//           },
//           {
//             where: {
//               id: req.body.Inventory_id,
//             },
//           },
//         );
//       })
//       .then(function (dbInventory) {
//         res.json('/');
//       });
//   }
//   // If we aren't given a customer, just update the Inventory to be devoured
//   else {
//     db.Inventory.update(
//       {
//         devoured: true,
//       },
//       {
//         where: {
//           id: req.body.Inventory_id,
//         },
//       },
//     ).then(function (dbInventory) {
//       res.json('/');
//     });
//   }
// });

module.exports = router;
