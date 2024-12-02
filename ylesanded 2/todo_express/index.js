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

            // kontrollib kas tasks.json on tühi ja... 
            // kui on tühi siis ära tee JSON.parse(data), kuna see võib lehekülje katki teha.
            const tasks = data.trim() === '' ? [] : JSON.parse(data);
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

app.get('/update', (req, res) => {
    // tasks list data from file
    readFile('./tasks.json').then(tasks => {
        // console.log(tasks);
        res.render('update', {
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

app.get('/update-task/:TaskId', (req, res) => {
    let updatedTaskId = req.params.TaskId;
    let error = null;
    let updateTask;
    

    //Read the tasks.json,
    readFile('./tasks.json').then(tasks => {
        //find the task,
        tasks.forEach((task, index) => {
            if (task.id == updatedTaskId) {
                let taskName = task.task;
                updateTask = {
                    "id": parseInt(updatedTaskId),
                    "task": taskName
                }
            }
        });

        //kui millegi pärast ei leia taski, siis jäta vahele ja esita error.
        if (updateTask !== null) {
            console.log('Task for updating =>', updateTask);
            res.render('update', {
                task: updateTask,
                error: error 
            });
        } 
        else {
            error = 'ERROR: Task not found!';
            res.render('index', {
                tasks: tasks,
                error: error
            });
        }
    });

    //pressing 'Update Task' will Write the update to the task

    app.post('/update/:taskId', (req, res) => {
        const taskId = parseInt(req.params.taskId);
        const taskName = req.body.task;

        if (req.body.task.trim().length == 0) {
            error = 'Please insert correct task data';
            readFile('./tasks.json').then(tasks => {
                res.render('update', {
                    taskId: taskId,
                    taskName: taskName,
                    error: error 
                });
            });
        }
        else {
            readFile('./tasks.json')
                .then(tasks => {
                    tasks.forEach((task, i) => {
                        if (task.id === taskId) {

                            tasks[i].task = taskName;

                            data = JSON.stringify(tasks, null, 2);
                            writeFile('./tasks.json', data);

                            console.log('Task data from update form =>', tasks[i]);

                            res.redirect('/');
                        }
                    });
                });
        }
    });


});

// console.log('in app');
app.listen(3001, () => {
    console.log('Server started at http://localhost:3001');
});