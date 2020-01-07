const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Profile = require('../../Models/Profile');




router.get('/', (req,res) => {
    //Querying through model

    Profile.find({}, (err,profile) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        
        res.json(profile);
    }
});
    
  
});


router.get('/')

module.exports = router;
