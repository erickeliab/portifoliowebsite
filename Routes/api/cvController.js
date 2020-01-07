const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Cv = require('../../Models/Cv');




router.get('/', (req,res) => {
    //Querying through model

    Cv.find({}, (err,all) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
       
        res.json(all);
    }
})
    
  
});


module.exports = router;
