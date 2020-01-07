const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Model = require('../../Model');



//getting all the services
router.get('/', (req,res) => {
    //Querying through model

Model.find({}, (err,all) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        var services = all[0].Services;
        res.json(services);
    }
});

//get a single service
router.get('/:s', (req,res) =>{

//finding thhe service according to the passed parameter
   
Model.find({}, (err,all) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        var index = parseInt(req.params.s);
        var services = all[0].Services;
       
        res.json(services[index]);
    }
});

   
});

//creating the new service


    
  
});


module.exports = router;
