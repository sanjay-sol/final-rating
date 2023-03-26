const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
    versionid:{
        type: String,
        
    },
    publicid:{
        type: String,
        
    },
    format:{
        type: String,
        
    },
    age:{
        type: String,
        
        default: '19',
    },
    email:{
        type: String,
        required: true,
    },
    section:{
        type: String,
        
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

registeruser.pre('save', async function (next){
    console.log("Hashing User Data with bcrypt....");
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12)
        this.confirmpassword = await bcrypt.hash(this.confirmpassword , 12)

    }
    next();
})


module.exports = mongoose.model("registeruser" , registeruser)