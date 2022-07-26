const express = require('express');
const cors = require('cors');

const app = express();

app.get('/', (request, response) => {
    response.send('<span> Hii </span>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('listening on port 5000');
});
