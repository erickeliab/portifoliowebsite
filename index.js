const express = require('express');
const path = require ('path');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');



const app = express();




//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/myFullstack';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;


//check connnection 
db.once('open',function(){
    console.log('Database Schema well configured');
})
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

 if (db) console.log('the database connects');

 //Getting the model
let myModel = require('./Model');
let Article = require('./Models/articles');

myModel.find({}, (err,data) => {
    if(!err){
        console.log(data);
    }
})

//body parser layer
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

const PORT = process.env.port || 5000;

//SETING THE EJS AS OUR VIEW ENGINE
app.use(expressLayout);
app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/home', function(req,res){
//res.render('index');
//Quering the database
myModel.find({}, (err,data) => {
    if(!err){
       res.jsonp(data);
    }
   
});
});



//ROUTING
//index routing

app.use('/', require('./Routes/indexroutes')); 

//API ROUTES
app.use('/api/members', require('./Routes/apiroute')); 
app.use('/api/services', require('./Routes/api/servicesController')); 
app.use('/api/cv', require('./Routes/api/cvController')); 
app.use('/api/skills', require('./Routes/api/skillsController')); 
app.use('/api/projects', require('./Routes/api/projectsController')); 
app.use('/api/messages', require('./Routes/api/messagesController')); 
app.use('/api/profile', require('./Routes/api/profileController')); 


//LISTENING TO THE SERVER
app.listen(PORT, () => {
console.log(`Server now is listening in port ${PORT}`);
});