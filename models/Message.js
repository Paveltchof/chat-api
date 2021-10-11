const mongoose = require('mongoose');
const Group = require('./Group');
const User = require('./User');

const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

const message = new schema({
 sender : {
   type: ObjectId, 
   ref: 'User'
 },
 message : [
   {
     message: String,
     meta: [
       {
         user : {
           type: ObjectId,
           ref: 'User'
         },
         delivered:{ type: Boolean, default:false},
         read:{type:Boolean, default:false}
       }
     ]
   }
 ],
  Group:{type:Boolean, default: false} ,
  Participants : [
    {
      user: {type: ObjectId, ref:User},
      delivered:{type: Boolean, default: false},
      
    }
  ]
});

module.exports = mongoose.model('Message', message);