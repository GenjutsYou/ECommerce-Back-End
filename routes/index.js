const router = require('express').Router();
const apiRoutes = require('./api');

// Specific route for the root URL '/'
router.get('/', (req, res) => {
  res.send("<h1>Welcome to the ECommerce-Back-End!</h1>");
});

router.use('/api', apiRoutes);

// Catch-all route for other undefined routes
router.use((req, res) => {
  res.status(404).send("<h1>Not Found</h1>");
});

module.exports = router;
