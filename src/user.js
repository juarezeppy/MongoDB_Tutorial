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
    posts: [PostSchema],
    likes: Number
}) 

// basically means... run this function whenever 'postCount' is requested
// use function instead of arrow function to keep 'this' bound to the UserSchema object
UserSchema.virtual('postCount').get(function(){
    return this.posts.length;
});

// model
const User = mongoose.model('user', UserSchema);

module.exports = User;