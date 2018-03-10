const mongoose = require('mongoose');
const { mongodb } = require('../config/default');

mongoose.connect(mongodb.url, {
    authSource: mongodb.authSource
}, (err) => {
    if (err) {
        console.error(`connect to ${mongodb.url} failed : ${err.message}`);
        process.exit(1);
    }
});

exports.User=require('./user');
exports.Topic=require('./topic');
exports.Comment=require('./comment');