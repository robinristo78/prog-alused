const express = require('express');
const path = require('path');
const fs = require('node:fs');
const { error } = require('console');

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

const writeFile = (filename, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, 'utf-8', error => {
            if (error) {
                console.error(error);
                return;
            }
            resolve(true);
        });
    });
} 

app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    // tasks list data from file
    readFile('./tasks.json').then(tasks => {
        // console.log(tasks);
        res.render('index', {
            tasks: tasks,
            error: null
        });
    });
});

app.use(express.urlencoded( { extended: true} ));

app.post('/', (req, res) => {
    // console.log('form sent data');
    // console.log(req.body.task);
    let error = null;
    if (req.body.task.trim().length == 0) {
        error = 'Please insert correct task data';
        readFile('./tasks.json').then(tasks => {
            res.render('index', {
                tasks: tasks,
                error: error
            });
        });
    } else { 
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

            writeFile('./tasks.json', data);
            res.redirect('/');
        });
    }
});

// app.get('/about', (req, res) => {
//     res.send('test changes');
// });

app.get('/delete-task/:taskId', (req, res) => {
    let deletedTaskId;
    
    if (req.params.taskId == "all") {
        deletedTaskId = req.params.taskId;
    }
    else { 
        deletedTaskId = parseInt(req.params.taskId);
    }

    readFile('./tasks.json').then(tasks => {
        tasks.forEach((task, index) => {
            // kui deletedTaskId == "all", siis jäta forEach vahele.
            if (deletedTaskId == "all") {
                return;
            } 
            else if (task.id === deletedTaskId) {
                tasks.splice(index, 1);
                console.log('Successfully deleted', task.task);
            }  
        });

        // kui deletedTaskId == "all", 
        // siis kustuta kõik tasks, sätides tasks array pikkuse nulliks.
        if (deletedTaskId == "all") {
            tasks.length = 0;
            console.log('All tasks successfully deleted');
        }
        data = JSON.stringify(tasks, null, 2);

        writeFile('./tasks.json', data);

    });
    // tuleb väljapool readFile-i teha redirect muidu leht ei lae õigesti.
    res.redirect('/');
});

console.log('in app');
app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});