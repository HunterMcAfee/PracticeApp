const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/:userId', (req, res) => {
    User.findById(req.params.userId)
        .then( (user) => {
            res.json(user);
        })
        .catch( (err) => {
            console.log(err);
        });
});


// router.post('/', (req, res) => {
//     const newUser = new User;
//     newUser = req.body.payload
//     newUser.save()
//         .then( (user) => {
//             console.log('New user was saved.');
//         })
//         .catch( (err) => {
//             console.log(err);
//         })
// })

module.exports = router;
