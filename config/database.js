const mongoose = require('mongoose');


module.exports = (settings) => {
    mongoose.connect(settings.db , err =>{
        console.log("Attepmt Connection to "+settings.db);
        if(err){
            console.log("MONGO ERROR" + err);
            return ;
        }
        console.log("MongoDB is ready!");
    })
}