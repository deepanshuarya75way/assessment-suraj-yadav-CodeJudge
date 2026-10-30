const mongoose = require("mongoose")
const Conversation = mongoose.model("Conversation", {
  learnerId:String,
  problemId:String,
  message:[
    {
      role:String,
      content:String
    }
  ]
});
module.exports = Conversation;