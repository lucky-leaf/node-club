const {User}=require('../models');

//新建一个用户
exports.addUser=(docs)=>{
    return User.create(docs);
}

//通过id获取用户
exports.getUserById=(id)=>{
    return User.findById(id).exec();
};

//通过name获取用户
exports.getUserByName=(name)=>{
    return User.findOne({name:name}).exec();
}