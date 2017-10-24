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

// router.post('/', (req, res) => {
//     let newUser = new User(req.body.payload);
//     newUser.save()
//         .then( (user) => {
//             console.log('New user was saved.');
//         })
//         .catch( (err) => {
//             console.log(err);
//         });
// });

// router.put('/:userId', (req, res) => {
//     User.findByIdAndUpdate(req.params.userId, req.body.payload)
//         .then( (user) => {
//             console.log(`User with ID ${req.params.userId} was updated.`)
//         })
//         .catch( (err) => {
//             console.log(err);
//         });
// });

// router.delete('/:userId', (req, res) => {
//     User.findByIdAndRemove(req.params.userId)
//         .then( (user) => {
//             console.log(`User with ID ${req.params.userId} was deleted.`)
//         })
//         .catch( (err) => {
//             console.log(err);
//         })
// });

module.exports = router;