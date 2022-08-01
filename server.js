const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

const publicPath = path.join(__dirname, 'frontend/build');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/', (request, response) => {
    response.send('<span> Hii </span>');
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log('listening on port 3001');
});
