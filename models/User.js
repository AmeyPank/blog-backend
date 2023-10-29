const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: 'string',
        require: true,

    },
    username: {
        type: 'string',
        unique: true,
        require: true,

    }, 
    email: {
        type: 'string',
        unique: true,
        require: true,

    }, 
    password: {
        type: 'string',
        require: true,

    },
})
module.exports = mongoose.model('users', UserSchema)