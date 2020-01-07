var mongoose = require('mongoose');

var ProjectSchema = mongoose.Schema({

    projectname : {
        type : String,
        required : true
    
    },
    tools : {
        type : Array,
        required : true
    },
    completed : {
        type : Number,
        required : true
    }
      
});

let Project = module.exports = mongoose.model('Project', ProjectSchema , 'projects');