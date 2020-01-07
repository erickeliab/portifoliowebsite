const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Skill = require('../../Models/Skill');




router.get('/', (req,res) => {
    //Querying through model

    Skill.find({}, (err,skills) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        
        res.json(skills);
    }
})
    
  
});


module.exports = router;
