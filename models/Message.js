const mongoose = require('mongoose');
const moment = require('moment');

  const messageSchema = mongoose.Schema({
      messageBody: {type: String, required: true},
      userId: {type: String, required: true}, 
      //time: moment().format('h:mm a')
  });
  module.exports = mongoose.model('Message', messageSchema);