const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const UserSchema = new Schema({
    name:String,
    postCount: Number
}) 

// model
const User = mongoose.model('user', UserSchema);

module.exports = User;