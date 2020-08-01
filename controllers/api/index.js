const router = require('express').Router();
const inventoryRoutes = require('./Inventory');
const employeeRoutes = require('./employees');
// Book routes
router.use('/inventory', inventoryRoutes); // add inventory
router.use('/employees', employeeRoutes); // add categories
router.use('/categories', inventoryRoutes); // add inventory

module.exports = router;
