
const message = require('../models/Message');
const Message = require('../models/Message');  

exports.createMessage = (req, res, next) => {
    
   const message = new Message({
       ...req.body
   });

   message.save()
   .then(() => res.status(201).json({ message: 'Message envoyé !'}))
   .catch( error => res.status(400).json({ error}));
    }; 

    exports.deleteMessage = (req, res, next) =>{
        Message.deleteOne({_id: req.params.id})
         .then(() => res.status(200).json({message: 'Message supprimé'}))
         .catch(error => res.status(404).json({error}));
       };

    exports.getAllMessage = (req, res, next) => {
        Message.find()
           .then(thing => res.status(200).json(message))
           .catch(error => res.status(400).json({error}));
        };