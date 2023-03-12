const mongoose = require('mongoose');


const likesmodel = new mongoose.Schema({
    giver:{
        type: String,
        required: true,
    },
    taker:{
        type: String,
        required: true,
    },
   likes:{
    type: String,
    ref:"registeruser"
   }
})
module.exports = mongoose.model("likesmodel" , likesmodel)
