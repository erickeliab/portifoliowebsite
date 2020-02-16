const express = require('express');
const path = require ('path');
const cors = require('cors');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');



const app = express();

app.use(cors());
//middleware
app.use((req, res, next) => {
  
    //  res.append('Access-Control-Expose-Headers', 'Content-Range');
    //  res.append('Content-Range', 'skills 0-3/20');
    //  res.append('Access-Control-Allow-Origin', []);
    //  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //  res.append('Access-Control-Allow-Headers', 'Content-Type');
    
 


    next();
});

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/MyFullstack';
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//setting a body parser for the middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


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
app.use(express.static(path.join(__dirname, 'public')));
app.use('/messages',express.static(path.join(__dirname, 'public')));
app.use('/servicez',express.static(path.join(__dirname, 'public')));
app.use('/profile',express.static(path.join(__dirname, 'public')));
app.use('/skills',express.static(path.join(__dirname, 'public')));
app.use('/cv',express.static(path.join(__dirname, 'public')));
app.use('/projects',express.static(path.join(__dirname, 'public')));
// app.use(express.static(__dirname + '/public'));

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
// app.use('/dashboard', require('./Routes/api/dashboardController')); 
app.use('/skills', require('./Routes/api/skillsController')); 
//API ROUTES
app.use('/servicez', require('./Routes/api/servicesController')); 
app.use('/cv', require('./Routes/api/cvController')); 
app.use('/projects', require('./Routes/api/projectsController')); 
app.use('/messages', require('./Routes/api/messagesController')); 
app.use('/profile', require('./Routes/api/profileController')); 


//LISTENING TO THE SERVER
app.listen(PORT, () => {
console.log(`Server now is listening in port ${PORT}`);
});