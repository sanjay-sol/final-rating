const mongoose = require('mongoose');


const registeruser = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    instaId:{
        type: String,
    },
    age:{
        type: String,
        required: true,
        default: '19',
    },
    email:{
        type: String,
        required: true,
    },
    section:{
        type: String,
        required: true,
        default:'CSE',
    },
    password:{
        type: String,
        required: true,
    },
    confirmpassword:{
        type: String,
        required: true,
    },
})
module.exports = mongoose.model("registeruser" , registeruser)