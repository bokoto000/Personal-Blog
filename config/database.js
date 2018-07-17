const mongoose = require('mongoose');


module.exports = (settings) => {
    mongoose.connect(settings.db , err =>{
        console.log(settings.db);
        if(err){
            console.log(err);
            return ;
        }
        console.log("MongoDB is ready!");
    })
}