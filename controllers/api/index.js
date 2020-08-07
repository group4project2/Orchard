const router = require('express').Router();
const inventoryRoutes = require('./inventory'); // route works
const employeeRoutes = require('./employees'); // route works
const itemRoutes = require('./items.js break'); // route works
const categoryRoutes = require('./categories');

router.use('/inventory', inventoryRoutes); // add inventory
router.use('/employees', employeeRoutes); // add employees
router.use('/items', itemRoutes); // add items
router.use('/categories', categoryRoutes); // add categories

module.exports = router;
