var mongoose = require ('mongoose');


const Event = mongoose.model('Event',{
    name:{type:String, required: true },
    description:{type: String,required:true},
    date:{type:Date, required:true}
})


module.exports = Event;