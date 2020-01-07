const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Model = require('../../Model');




router.get('/', (req,res) => {
    //Querying through model

Model.find({}, (err,all) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        var profile = all[0].Profile;
        res.json(profile);
    }
})
    
  
});


module.exports = router;
