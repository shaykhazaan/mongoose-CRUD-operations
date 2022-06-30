const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

const router = require('./routes/user');

app.use(bodyParser.urlencoded({extended: true}))
const connStr = 'mongodb+srv://dbUser:dbUser@cluster0.phflj.mongodb.net/user';

mongoose.connect(connStr, (error)=> {
    console.log('Connected to mongodb database');
    
});

app.get('/', (req,res,next) => {
    res.render('index.ejs');
})


app.use(router);


app.listen(3000, function() {
    console.log('App is listening on Port: 3000')
})