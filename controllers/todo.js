const express = require('express');
const router = express.Router({mergeParams: true});

const User = require('../models/user');
const List = require('../models/list');
const Todo = require('../models/todo');

router.get('/:userId/:listId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            res.json(foundList.todos);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.get('/:userId/:listId/:todoId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            let foundTodo = foundList.todos.find((todo) => {
                return todo.id === req.params.todoId
            })
            res.json(foundTodo);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.post('/:userId/:listId', (req, res) => {
    let newTodo = new Todo(req.body.payload);
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            }); 
            foundList.todos.push(newTodo);
            user.save();
            console.log(`New todo was created`);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.put('/:userId/:listId/:todoId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            let foundTodo = foundList.todos.find((todo) => {
                return todo.id === req.params.todoId
            })
            foundTodo.todoTitle = req.body.payload.todoTitle;
            foundTodo.todoDescription = req.body.payload.todoDescription;
            foundTodo.status = req.body.payload.status;
            user.save();
            res.json(foundTodo);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.delete('/:userId/:listId/:todoId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            let foundTodo = foundList.todos.find((todo) => {
                return todo.id === req.params.todoId
            })
            foundList.todos.remove(foundTodo)
            user.save();
            console.log(`Todo was successfully deleted`);
        })
        .catch( (err) => {
            console.log(err);
        })
});

module.exports = router;