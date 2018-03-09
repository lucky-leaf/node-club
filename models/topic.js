const {Schema,model}=require('mongoose');

const topicSchema=new Schema({
    user:{
        name:{type:String,require:true},
        email:{type:String,require:true}
    },
    title:{type:String,required:true},
    content:{type:String,required:true},
    tab:{type:String,required:true},
    pv:{type:Number,default:0},
    comment:{type:Number,default:0},
    createdTime:{type:Date,default:Date.now},
    updatedTime:{type:Date,default:Date.now}
});

topicSchema.index({tab:1,updatedTime:-1});
topicSchema.index({'user.name':1,updatedTime:-1});

module.exports=model('Topic',topicSchema);