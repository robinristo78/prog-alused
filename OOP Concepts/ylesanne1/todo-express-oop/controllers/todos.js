import { fileManager } from '../files.js';
import { Todo } from '../models/todo.js'

class todoController {
    constructor(){
        this.initTodos();
    }

    async createTodo(req, res){

        const task = req.body.task;

        const newTodo = new Todo(Math.random().toString(), task);

        this.TODOS.push(newTodo);

        await fileManager.writeFile('./data/todos.json', this.TODOS);

        res.json({
            message: 'created new todo object',
            newTask: newTodo
        });
    }

    async initTodos()  {
        const todosData = await fileManager.readFile('./data/todos.json');

        if (todosData !== null) {
            this.TODOS = todosData;
        }
        else {
            this.TODOS = [];
        }
    } 

    getTodos(req, res){
        res.json({tasks: this.TODOS});
    }
    
    async updateTodo(req, res){

        const todoId = req.params.id;

        const updatedTask = req.body.task;

        try {

            const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);

            if (todoIndex < 0) {
                console.error('Could not find todo!');
                res.json({message: 'Could not find todo with such index.'});
            }

            this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask);

            await fileManager.writeFile('./data/todos.json', this.TODOS);

            res.json({
                message: 'Updated todo',
                updatedTask: this.TODOS[todoIndex]
            });
        } catch(error) {} 
    }

    async deleteTodo(req, res){
        const todoId = req.params.id;

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId);

        try {
            if (this.TODOS[todoIndex].id === todoId) {
                const task = this.TODOS[todoIndex];

                this.TODOS.splice(todoIndex, 1);

                await fileManager.writeFile('./data/todos.json', this.TODOS);

                res.json({
                    message: 'Deleted todo',
                    deletedTask: task
                });
            }
        } catch(error) {
            console.error('Could not find todo with that id.');
            res.json({message: 'Could not find todo with that id.'});
        }
    } 
}

export const TodoController = new todoController();