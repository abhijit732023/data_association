const mongo = require('mongoose')


const poststructure=mongo.Schema({
    postdata:String,
    userID:{
        type:mongo.Schema.Types.ObjectId,
        ref:'user'
    },
    date:{
        type:Date,
        default:Date.now
    }
    
})

module.exports=mongo.model('post',poststructure)