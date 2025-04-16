const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from public/
app.use(express.static('public'));

// Route for "/date" that sends the HTML page
app.get('/date', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'date.html'));
});

app.get('/api/date', (req, res) => {
    const now = new Date();
    // Return as JSON with separated date and time
    res.json({
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
        timestamp: now.getTime() // Optional: include timestamp if needed
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});