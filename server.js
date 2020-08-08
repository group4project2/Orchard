// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require('express');
//const routes = require('./controllers/');
const app = express();
const PORT = process.env.PORT || 3001;
var db = require('./database');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'development') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
//app.use(routes);
// adding category route

// MIKES CHANGES: Refactored route definitions to be shorter and more clear
app.use('/api/categories', require('./controllers/Categories'));
app.use('/api/items', require('./controllers/Items'));

// app.get('/items', (req, res) => {
//   const items = [
//     {
//       id: 1,
//       name: 'Banana',
//       quantity: 30,
//       price: '0',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 2,
//       name: 'Mango',
//       quantity: 30,
//       price: '1',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 3,
//       name: 'Watermelon Personal Size',
//       quantity: 30,
//       price: '3',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 4,
//       name: 'Pomegranate',
//       quantity: 30,
//       price: '1',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 5,
//       name: 'Plum',
//       quantity: 30,
//       price: '1',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 6,
//       name: 'Eggplant',
//       quantity: 20,
//       price: '2',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 7,
//       name: 'Red Onion',
//       quantity: 20,
//       price: '1',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 8,
//       name: 'Tomato',
//       quantity: 20,
//       price: '0',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 9,
//       name: 'Sweet Potato',
//       quantity: 20,
//       price: '1',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 10,
//       name: 'Beet',
//       quantity: 20,
//       price: '2',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 11,
//       name: 'Red Roses - Dozen -1 bundle',
//       quantity: 5,
//       price: '10',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 12,
//       name: 'Orchis - 5 in',
//       quantity: 5,
//       price: '21',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 13,
//       name: 'Sunflowers - 1 bundle',
//       quantity: 5,
//       price: '10',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 14,
//       name: 'Snake Plant - 4" Pot',
//       quantity: 5,
//       price: '9',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 15,
//       name: 'Sunset Jade Plant- House Plant - 4" Pot',
//       quantity: 5,
//       price: '13',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//     {
//       id: 16,
//       name: 'Chinese Evergreen- House Plant - 4" Pot',
//       quantity: 5,
//       price: '19',
//       date_received: '2020-08-04',
//       exp_date: '2020-08-09T11:22:22.000Z',
//       createdAt: '2020-08-04T11:22:22.000Z',
//       updatedAt: '2020-08-04T11:22:22.000Z',
//     },
//   ];

//   res.json(items);
// });

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
