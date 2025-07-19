const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const buildPath = path.join(__dirname, 'build');

app.use(express.static(buildPath));
app.get('/', (_req, res) => {
  res.sendFile(path.join(buildPath, 'window.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Burrow running at http://localhost:${port}/`);
});
