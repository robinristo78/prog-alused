const express = require('express');
const path = require('path');
const fs = require('node:fs');

const app = express();

const readFile = (filename) => {
    return new Promise((resolve, reject) => { 
        fs.readFile(filename, 'utf-8', (error, data) => {
            if (error) {
                console.error(error);
                return;
            }

            const tasks = JSON.parse(data);
            resolve(tasks);
        });
    });
}


app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {

    readFile('./tasks.json').then(tasks => {
        console.log(tasks);
        res.render('index', {tasks: tasks});
    });

});

app.use(express.urlencoded( { extended: true} ));

app.post('/', (req, res) => {
    console.log('form sent data');
    console.log(req.body.task);

    readFile('./tasks.json').then(tasks => {
        // tasks.push(req.body.task);
        // const data = tasks.join('\n');
        // console.log(data);

        let index;
        if (tasks.length === 0) {
            index = 0;
        } else {
            index = tasks[tasks.length-1].id + 1;
        }

        const newTask = {
            "id": index,
            "task": req.body.task
        }
        
        tasks.push(newTask);

        data = JSON.stringify(tasks, null, 2);

        fs.writeFile('./tasks.json', data, error => {
            if (error) {
                console.error(error);
                return;
            } else {
                console.log('saved');
            } 
            res.redirect('/');
        });
    });
});

// app.get('/about', (req, res) => {
//     res.send('test changes');
// });

app.get('/delete-task/:taskId', (req, res) => {
    let deletedTaskId = parseInt(req.params.taskId);
    readFile('./tasks.json').then(tasks => {
        tasks.forEach((task, index) => {
            if (task.id === deletedTaskId) {
                tasks.splice(index, 1);
                console.log('Successfully deleted', task.task);
            }  
        });
        data = JSON.stringify(tasks, null, 2);
        fs.writeFile('./tasks.json', data, 'utf-8', err => {
            if (err) {
                console.error(err);
                return;
            }

            res.redirect('/');
        });
    });
    
});

console.log('in app');
app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});