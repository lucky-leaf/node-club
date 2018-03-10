const {Topic}=require('../models');

//新建一个话题
exports.addTopic=(docs)=>{
    return Topic.create(docs);
};

//通过id获取一个话题，并增加pv
exports.getTopicById=(id)=>{
    return Topic.findByIdAndUpdate(id,{$inc:{pv:1}}).exec();
}

//通过标签和页码获取10个话题
exports.getTopicsByTab=(tab,pageNum)=>{
    let query={};
    query.tab=tab || 'all';
    return Topic.find(query).skip((pageNum-1)*10).sort('-updatedTime').limit(10).select('-content').exec();
};

//获取用户所有话题
exports.getTopicsByName=(name)=>{
    return Topic.find({'user.name':name}).sort('-updatedTime').exec();
};

//通过id增加一个话题的评论数
exports.incCommentById=(id)=>{
    return Topic.findByIdAndUpdate(id,{$inc:{comment:1}}).exec();
};

//获取5跳最近未评论的话题
exports.getNoReplyTopics=()=>{
    return Topic.find({comment:0}).sort('-updatedTime').limit(5).select('title').exec();
}

//获取不同标签的话题数
exports.getTopicsCount=(tab)=>{
    let query={};
    query.tab=tab || 'all';
    return Topic.count(query).exec();
}