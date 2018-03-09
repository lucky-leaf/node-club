const {Schema,model}=require('mongoose');
const ObjectId=Schema.ObjectId;

const commentSchema=new Schema({
    topicId:{type:ObjectId,required:true},
    user:{
        name:{type:String,required:true},
        email:{type:String,required:true}
    },
    content:{type:String,required:true},
    createdTime:{type:Date,default:Date.now},
    updatedTime:{type:Date,default:Date.now}
});

commentSchema.index({topicId:1,updatedTime:1});

module.exports=mongoose.model('Comment',commentSchema);