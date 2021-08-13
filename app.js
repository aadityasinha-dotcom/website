const express = require('express');

// express app
const app = express();

//register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {

    res.sendFile('./site/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {

    res.sendFile('./site/about.html', { root: __dirname });
})