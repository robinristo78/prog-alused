const express = require('express');
const path = require('path');
const fs = require('node:fs');

const app = express();

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    // res.send(path.join(__dirname, "views"));

    // const tasks = ['Study JS', 'Study templating', 'Study HTTP'];  
    

    fs.readFile('./tasks', 'utf-8', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }

        // console.log('in fs.readFile(./tasks)');
        const tasks = data.split('\n'); 
        res.render('index', {tasks: tasks});
    });

    

    // console.log('in app.get(/)');
});



// app.get('/about', (req, res) => {
//     res.send('test changes');
// });

console.log('in app');
app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});