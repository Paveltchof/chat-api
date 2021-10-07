
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose') ;
const messageRoutes = require('./routes/message')
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://Storm1:Pavlo@storm.6o3ej.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  // cross origin resource validation.
  const app = express();
 app.use((req, res, next) =>{
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
     next();
 }); 

 app.use(bodyParser.json());

 app.use('/api/message', messageRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;