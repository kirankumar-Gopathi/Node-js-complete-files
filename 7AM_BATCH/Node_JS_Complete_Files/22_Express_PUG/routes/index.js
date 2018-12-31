const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express PUG' , page : 'home' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'About Us', page : 'about' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Get In Touch', page : 'contact' });
});

router.get('/services', function(req, res, next) {
    res.render('services', { title: 'Services We Provide', page : 'services' });
});
module.exports = router;
