const mongoose = require('mongoose');
const PostSchema = require('../src/post');
const Schema = mongoose.Schema;

// schema
const UserSchema = new Schema({
    name: {
        type: String,
        validate: {
            validator: (name)=>name.length > 2,
            message: 'Name must be longer than 2 characters'
        },
        required: [true, 'Name is required']
    },
    postCount: Number,
    posts: [PostSchema]
}) 

// model
const User = mongoose.model('user', UserSchema);

module.exports = User;