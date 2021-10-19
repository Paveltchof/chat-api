const mongoose = require('mongoose');
const Group = require('./Group');
const User = require('./User');

const Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId

const ParticipantSchema = Schema({
    Group = [{
        type:ObjectId,
        ref:"Group"}],
    User = [{
        type:ObjectId,
        ref:"User"}],
});
module.exports = mongoose.models('Participants', ParticipantSchema);