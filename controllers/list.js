const express = require('express');
const router = express.Router();

const User = require('../models/user');
const List = require('../models/list');

router.get('/:userId/', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            res.json(user.lists)
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.get('/:userId/:listId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            res.json(foundList);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.post('/:userId', (req, res) => {
    let newList = new List(req.body);
    User.findById(req.params.userId)
        .then( (user) => {
            user.lists.push(newList);
            user.save();
            console.log(`New list was created for User ID ${req.params.userId}`);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.put('/:userId/:listId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            foundList.listTitle = req.body.payload.listTitle;
            foundList.listDescription = req.body.payload.listDescription;
            user.save();
            console.log(`List was updated`);
        })
        .catch( (err) => {
            console.log(err);
        });
});

router.delete('/:userId/:listId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            let foundList = user.lists.find((list) => {
                return list.id === req.params.listId
            })
            user.lists.remove(foundList)
            user.save();
            console.log(`List was successfully deleted`);
        })
        .catch( (err) => {
            console.log(err);
        })
});

module.exports = router;