const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var GroupSchema = new mongoose.Schema({
    Group_Id = ObjectId,
    name: { type: String, unique: true },
    topic: {type: String, required:true},
    users: [User],
    messages: [Message],
    created_at: {type:Date, required: true},
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Group', GroupSchema);