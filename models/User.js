const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
    _id = ObjectId,
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {type: String, required: true},
    on_line: { type: Boolean, default: false },
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);