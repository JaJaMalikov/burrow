const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const buildDir = path.join(__dirname, 'build');

app.use(express.static(buildDir));
app.get('/', (_, res) => res.sendFile(path.join(buildDir, 'window.html')));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
