const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const getDB = require('../database/database').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
 // get the data from database
    const db = getDB();
    db.collection('todos').find({}).toArray((err,todos) => {
        if(err){
            return console.log(err);
        }
        res.render('index', {title: 'Express EJS' , page:'home', todos : todos});
    });
});

// handle form data
router.post('/todo', urlencodedParser , function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    // get the form data
    let enteredItem = req.body.item.trim();

    //insert to database
    const db = getDB();
    db.collection('todos').insertOne({item : enteredItem},(err , data) => {
        if(err) throw err;
    });

    // fetch the data from database
    db.collection('todos').find({}).toArray((err,todos) => {
        if(err){
            return console.log(err);
        }
        res.render('index', {title: 'Express EJS' , page:'home', todos : todos});
    });

});

// Delete a Todo
router.delete('/todo/:selectedTodo', function(req, res, next) {
    let selectedTodo = req.params.selectedTodo.trim();
    //delete from database
    const db = getDB();
    db.collection('todos').deleteOne({item : selectedTodo},(err , data) => {
        if(err) throw err;
    });

    // fetch the data from database
    db.collection('todos').find({}).toArray((err,todos) => {
        if(err){
            return console.log(err);
        }
        res.render('index', {title: 'Express EJS' , page:'home', todos : todos});
    });

});

module.exports = router;
