const express = require('express');
const router = express.Router();


router.get('/', (request,response) => {
    response.render('index');
    }); 

router.get('/about', function(req,res){
    res.render('about');
});

router.get('/services', function(req,res){
    res.render('services');
});

router.get('/login', function(req,res){
    res.render('auth/login');
});
router.get('/contacts', function(req,res){
    res.render('contacts');
});


module.exports = router;
