const {Schema,model}=require('mongoose');

const userSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    gender:{type:String,required:true},
    signature:{type:String},
    createdTime:{type:Date,default:Date.now},
    updatedTime:{type:Date,default:Date.now}
});

userSchema.index({name:1});

module.exports=model('User',userSchema);