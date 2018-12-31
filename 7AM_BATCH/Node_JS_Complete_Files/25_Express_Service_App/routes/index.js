const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const getDB = require('../database/database').getDB;

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ACT Services' });
});

// to get the raise a request form
router.get('/raise', function(req, res, next) {
    res.render('raise', { title: 'Raise a Request' });
});

// to handle the post request
router.post('/raise',urlencodedParser, function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
     let data = {
        username : req.body.username,
        subject : req.body.subject,
        issue : req.body.issue
     };
    //insert to database
    const db = getDB();
    db.collection('services').insertOne({data : data},(err , someData) => {
        if(err) throw err;
    });
    res.render('raise-success', { data : data });
});

// to get the list of requests
router.get('/list', function(req, res, next) {

    // get the data from database
    const db = getDB();
    db.collection('services').find({}).toArray((err,requests) => {
        if(err){
            return console.log(err);
        }
        res.render('requests', {requests : requests});
    });
});


module.exports = router;
