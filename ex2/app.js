const express = require('express');
const app = express();
const path = require('path');

// Middlewares
app.use(express.static(path.join(__dirname, 'public'))); // Fichiers statiques

// Routes
const homeRoute = require('./routes/home');
const dateRoute = require('./routes/date');

app.use('/', homeRoute);
app.use('/date', dateRoute);

// Lancement du serveur
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
