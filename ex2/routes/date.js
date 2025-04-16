const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const now = new Date();
  res.send(`Nous sommes le ${now.toLocaleDateString()} à ${now.toLocaleTimeString()}`);
});

module.exports = router;
