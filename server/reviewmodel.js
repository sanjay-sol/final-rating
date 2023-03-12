const mongoose = require("mongoose");

const review = new mongoose.Schema({
  giver: {
    type: String,
    required: true,
  },
  taker: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    default:'No Advice from me',
  },
  likes:{
    type:String,
    default:'No'
  },
});
module.exports = mongoose.model("review", review);
