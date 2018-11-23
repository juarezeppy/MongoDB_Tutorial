const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    postCount: Number
}) 

// model
const User = mongoose.model('user', UserSchema);

module.exports = User;