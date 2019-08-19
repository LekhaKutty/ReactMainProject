const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACT = 10;
const BadmintonRegiSchema = new Schema({
    firstname:{
        type: String,
        lowercase: true,
        unique: false,
        match: [/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/, 'is invalid'],
        index: true
    },
    lastname:{
        type: String,
        lowercase: true,
        unique: false,
        required:[true, "can't be blank"],
        match: [/^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/, 'is invalid'],
        index: true
    },
    mobilenumber:{
        type: String,
        index:true
    },
    email:{
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        unique: true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true},
    password:{
        type: String,
        required: true }
});
module.exports = mongoose.model('BadmintonData',BadmintonRegiSchema);