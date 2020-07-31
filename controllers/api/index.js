const router = require('express').Router();
const burgerRoutes = require('./burger');
const employeeRoutes = require('./employees');
// Book routes
router.use('/burger', burgerRoutes); // add inventory
router.use('/employees', employeeRoutes); // add categories
module.exports = router;
