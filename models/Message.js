const mongoose = require('mongoose');
const Group = require('./Group');
const User = require('./User');

const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const message = new schema({
  Message_id = ObjectId,
  group: Group.ObjectId,
  user:User.ObjectId,
  message_line: {type:String, required:true,},
  read: {type:Boolean, default:true},
  created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', message);