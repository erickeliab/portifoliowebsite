const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');

//importing the model
let Service = require('../../Models/Service');



//getting all the services
router.get('/', (req,res) => {
    //Querying through model

    Service.find({}, (err,services) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        
        res.json(services);
    }
});

//get a single service
router.get('/:s', (req,res) =>{

//finding thhe service according to the passed parameter

   
Service.findOne({s_name : req.params.s}, (err,service) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
       
       //res.send(req.params.s);
        res.json(service);
    }
});

   
});

//creating the new service
router.post('/', (req,res)=> {

    //an instance of the new document
    var newService = new Service({
        s_name : "Mobile",
        imgpath : "",
        head : "Mobile Application Development",
        bodytext : "Mobile apps that run in both android and ios platforms , they have native looks to higher the usr experience"
    
    } );

//saving amodel to the database
newService.save( function(err,serv) {
    if(err)
    {
        console.error(error);
    }
    elseif(serv)
    {
       console.log(serv.s_name + 'saved');
    }
});



} )

    
  
});


module.exports = router;
