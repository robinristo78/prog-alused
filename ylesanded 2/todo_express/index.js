const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    // res.send(path.join(__dirname, "views"));
    res.render('index');
});

// app.get('/about', (req, res) => {
//     res.send('test changes');
// });

app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});