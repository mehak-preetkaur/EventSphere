const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({

    eventTitle:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true
    },

    branch:{
        type:String,
        required:true
    },

    year:{
        type:String,
        required:true
    },

    roll:{
        type:String,
        required:true,
        unique:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    registeredAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model("Registration", registrationSchema);