require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const User = require('../models/user');
const List = require('../models/list');
const Todo = require('../models/todo');

mongoose.Promise = global.Promise;

User.remove({}, (err) => console.log(err));
List.remove({}, (err) => console.log(err));
Todo.remove({}, (err) => console.log(err));

const todo1 = new Todo({
    todoTitle: 'Dog',
    todoDescription: 'Walk the dog for 30 minutes.',
    status: false
});

const todo2 = new Todo({
    todoTitle: 'Dishes',
    todoDescription: 'Wash the dishes in the sink.',
    status: false
});

const todo3 = new Todo({
    todoTitle: 'Bed',
    todoDescription: 'Make the guest bed for the weekend.',
    status: true
});


const list1 = new List({
    listTitle: 'Monday',
    listDescription: 'Things to do today',
    todos: [todo1, todo2, todo3]
});

const user1 = new User({
    userName: 'Jaws',
    email: 'JD@gmail.com',
    password: '1234567890',
    firstName: 'Jeffrey',
    lastName: 'Dawson',
    lists: [list1]
});

user1.save().then( () => {
    console.log('Jaws was saved successfully');
}).catch((err) => {
    console.log(err);
})

mongoose.connection.close();