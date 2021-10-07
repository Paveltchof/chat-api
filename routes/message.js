const express =  require('express');
const router = express.Router();
const auth = require('../middleware/auth');
 
const messageCtrl = require('../controllers/message');

    router.post('/', auth, messageCtrl.createMessage);
    router.delete('/:id', auth, messageCtrl.deleteMessage);
    router.get('/', auth, messageCtrl.getAllMessage);

module.exports = router;