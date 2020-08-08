const axios = require('axios');

export const item = (newItem) => {
  return axios
    .post('/api/items/items', {
      name: newItem.name,
      quantity: newItem.quantity,
      price: newItem.price,
      date_received: newItem.date_received,
      exp_date: newItem.exp_date,
    })
    .then((res) => {
      console.log('TESTING req.body');
    })
    .catch((err) => {
      console.log(err);
    });
};
