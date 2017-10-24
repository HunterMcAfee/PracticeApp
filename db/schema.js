const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    todoTitle: String,
    todoDescription: String,
    status: Boolean
});

const listSchema = mongoose.Schema({
    listTitle: String,
    listDescription: String,
    todos: [todoSchema]
});

const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    lists: [listSchema]
});

const userModel = mongoose.model('User', userSchema);
const listModel = mongoose.model('List', listSchema);
const todoModel = mongoose.model('Todo', todoSchema);

module.exports = {
    userModel, listModel, todoModel
}
