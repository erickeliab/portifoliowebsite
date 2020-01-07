const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Message = require('../../Models/Message');




router.get('/', (req,res) => {
    //Querying through model

    Message.find({}, (err,messages) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
       
        res.json(messages);
    }
})
    
  
});


module.exports = router;
