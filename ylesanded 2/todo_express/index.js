const express = require('express');
const path = require('path');
const fs = require('node:fs');

const app = express();

const readFile = (filename) =>{
    return new Promise((resolve, reject) => { 
        fs.readFile('./tasks', 'utf-8', (error, data) => {
            if (error) {
                console.error(error);
                return;
            }

            // console.log('in fs.readFile(./tasks)');
            const tasks = data.split('\n');
            resolve(tasks);
        });
    });
}


app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    
    // old:
    // fs.readFile('./tasks', 'utf-8', (error, data) => {
    //     if (error) {
    //         console.error(error);
    //         return;
    //     }

    //     // console.log('in fs.readFile(./tasks)');
    //     const tasks = data.split('\n'); 
    //     res.render('index', {tasks: tasks});
    // });

    // console.log('in app.get(/)');

    readFile('./tasks').then(tasks => {
        console.log(tasks);
        res.render('index', {tasks: tasks});
    });

});

app.use(express.urlencoded( { extended: true} ));

app.post('/', (req, res) => {
    console.log('form sent data');
    console.log(req.body.task);

    readFile('./tasks').then(tasks => {
        tasks.push(req.body.task);
        const data = tasks.join('\n');
        console.log(data);
        fs.writeFile('./tasks', data, error => {
            if (error) {
                console.error(error);
                return;
            }
            res.redirect('/');
        });
    });
});

// app.get('/about', (req, res) => {
//     res.send('test changes');
// });

console.log('in app');
app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});