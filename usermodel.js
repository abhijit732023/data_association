const mongo=require('mongoose')

mongo.connect('mongodb://localhost/dataAssociation')

const userschema=mongo.Schema({
    name:String,
    email:String,
    age:Number,
    posts:[{
        type:mongo.Schema.Types.ObjectId,//this used for storing the reference of different mongodb document
        ref:'post'
    }]
})


module.exports=mongo.model('user',userschema)