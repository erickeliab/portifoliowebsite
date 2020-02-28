const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');


//importing the model
let Service = require('../../Models/Service');
let Skill = require('../../Models/Skill');
mongoose.set('useFindAndModify', false);


//getting all the services
router.get('/', (req,res) => {
    //Querying through model

    Service.find({}, (err,services) => {
    if (err) {
        res.status(404,{msg: 'The services were not found'});
    }else {
        console.log(services);
        res.render('auth/Services/allservices',{services});
    }
});
});

//get the page of adding the service

router.get('/add', (req,res) => {
    Skill.find( (err,skills) => {
        if (err) {
            console.log('some error occured during querrying the skills');
        } 
        else {
            res.render('auth/Services/addservice', {skills});
        }
    });
  
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

router.post('/', (req,res) => {

   

    var savedata = new Service(req.body);
    
    savedata.save(function(err, result) {
        if (err) throw err;

        if(result) {
            res.json(result)
        }
    })
 } );

//updating the existing service

router.put('/:s', (req,res) =>{

    //finding thhe service according to the passed parameter
    
       
    Service.findOne({s_name : req.params.s}, (err,service) => {
        if (err) {
            res.status(404,{msg: 'The services were not found'});
        }else {
           
            var query = {'s_name' : service.s_name};
            let newService = req.body;
            Service.findOneAndUpdate(query, newService, {upsert: true}, function(err, doc) {
                if (err) return res.send(500, {error: err});
                return res.send('Successful updated');
            });
          
        }
    });
    
});
  
router.delete('/:s', (req,res) =>{

    //finding thhe service according to the passed parameter
   
    Service.deleteOne({s_name : req.params.s}, (err,doc) => {
        if(err) throw err;
        else {
            res.send('successfull deleted');
        }
    } );
    
       
    });


module.exports = router;
