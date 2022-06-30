const mongoose = require('mongoose');
const User = require('../models/user')

const express = require('express');
const router = express.Router();

router.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

router.post('/', (req,res) => {
  
  const data = new User(req.body);
  data.save((err) => {
    if(err){console.log(err);}
    res.redirect('/users');
    
});
});

router.get('/users', (req, res) => {
    User.find().then((result) => {
        res.render('user.ejs', {users: result});
    })
    .catch((err) => console.log(err))
    

})

router.post('/deleteuser', (req, res) => {
    console.log(req.body);
    const id = req.body.id;
    User.findByIdAndDelete(id).then(res.redirect('/users'))
})

module.exports= router;