const {Comment}=require('../models');

//添加一条评论
exports.addComment=(doc)=>{
    return Comment.create(doc);
};

//根据话题id获取对应评论
exports.getCommentsByTopicId=(id)=>{
    return Comment.find({topicId:id}).sort('updatedTime').exec();
}