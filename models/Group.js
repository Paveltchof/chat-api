const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var GroupSchema = new mongoose.Schema({
    Group_Id = ObjectId,
    name: { type: String, required: true, lowercase:true },
    users: [User],
    messages: [Message],
    created_at: {type:Date, default: Date.now},
    updated_at: { type: Date, default: Date.now },
    created_by: User 
});
module.exports = mongoose.model('Group', GroupSchema);