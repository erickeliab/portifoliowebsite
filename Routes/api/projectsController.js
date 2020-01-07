const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Project = require('../../Models/Project');




router.get('/', (req,res) => {
    //Querying through model

    Project.find({}, (err,projects) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
       
        res.json(projects);
    }
})
    
  
});


module.exports = router;
