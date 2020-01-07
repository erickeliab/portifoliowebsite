let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let appSchema = new Schema({

    _id : String,
    Services : [
        {
            s_name : String,
            imgpath : String,
            head : String,
            bodytext : String
        }
    ],
    Skills : [
        {
			skillname : String,
			competence : String,
			experience : String
		}
    ],
    Profile : {
		firstname :  String,
		middlename :  String,
		lastname :  String,
		Bithday : Date,
		Job : [],
		Nationality :  String,
		MaritalStatus :  String,
		Hobbies : []
    },
    Projects : [
		{
			projectname : String,
			tools : [],
			completed : Number
		}
    ],
    Messages : [
		{
			id : String,
			sendersname :String,
			lastname : String,
			email : String,
			phone : String,
			message : String,
		}
	],



    Cv : {
        name : String,
        Address :String,
        Telephone : String,
        Email : String,
        Birthday : String,
        Nationality : String,
        Status : String,
        Education : [{
            start : String,
            end : String,
            INSTITUTION: String,
            award : String
           
        }],
        Qualifications : [{
            Proficient : []
        } ]
       
    } 

  

});

let myModel = module.exports = mongoose.model('myModel', appSchema ,'myFullstack' );