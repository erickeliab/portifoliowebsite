const express = require('express');
const router = express.Router();
let mongoose = require('mongoose');
const cors = require('cors');




//importing the model
let Skill = require('../../Models/Skill');
mongoose.set('useFindAndModify', false);



//
const tota = Skill.count({}, function(err,count){
        
        return count;
        console.log(count);
    });
   


console.log(tota);

router.use((req, res, next) => {

    Skill.count({}, function(err,count){
        
       
    // res.append('Access-Control-Expose-Headers', 'Content-Range');
    //  res.append('Content-Range', 'skills 0-3/'+ count);
    //  res.append('Access-Control-Allow-Origin', []);
    //  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //  res.append('Access-Control-Allow-Headers', 'Content-Type');
    
     
 });
    next();
});

//GETTING ALL THE SKILLS
router.get('/', (req,res) => {
    //Querying through model

    Skill.find({}, (err,skills) => {
    if (err) {
       
        res.status(404,{msg: 'The services were not found'});
    }else {
       
        res.render('auth/Skills/allskills');
    }
   
})
    
  
});
//getting the form to addte skill
router.get('/add', (req,res) => {
    //Querying through model

    Skill.find({}, (err,skills) => {
    if (err) {
       
        res.status(404,{msg: 'The services were not found'});
    }else {
       
        res.render('auth/Skills/addskill');
    }
   
})
    
  
});

//ADDING NEW SKILL 
router.post('/', (req,res) => {
    //Querying through model
    Skill.count({}, function(err,count){
        county = count;
       req.body.id = county + 1;
        console.log(county);
        

        var newskill = new Skill(req.body);

        newskill.save( (err,result) => {
            if (err) {
                throw err;
            }else {
                res.send(result);
            }
        });
    });
  

});

//GETTING A SINGLE SKILL
router.get('/:id', (req,res) => {

    Skill.find({'_id' : req.params.id}, function(err,skill){
        if (err) throw err;

        if(skill){
            res.render('auth/Skills/singleskill');
        }
    });
    
});


//UPDATING A SPECIFIED SKILL
router.put('/:id', (req,res) => {

    let updates = req.body;

    Skill.findOneAndUpdate({'_id' : req.params.id},updates, (err,doc) => {
        if (err) throw err;
        if(doc){
            res.send(updates);
        }
    });
});

//DELETING A SINGLE SKILL
router.delete('/:id', (req,res) => {

    Skill.findOneAndDelete({'_id' : req.params.id}, function(err,doc){
        if (err) throw err;

        if(doc){
            res.send('successfully deleted');
        }
    });
    
    
});

module.exports = router;
