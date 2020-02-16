let mongoose = require('mongoose');

let ServiceSchema = mongoose.Schema({

    
        s_name : {
            type : String,
            required : true
        },
        imgpath : {
            type : String,
            required : false
        },
        head : {
            type : String,
            required : true
        },
        bodytext : {
            type : String,
            required : true
        }
    

});

let Service = module.exports = mongoose.model('Sevice',ServiceSchema , 'services');