//  Add dependecnies required 
const path = require('path'); 
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({helpers});
const session = require('express-session'); // connect to back end 
const { truncate } = require('fs/promises');
//store the sessions created by express-session into our database.
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express(); // instance 
// set up enviroment variables 
const PORT = process.env.PORT || 3001; // assign port number

const sess = {
  secret: 'Super secret secret', // will be replaced by actual secret codes stored in .env 
  cookie: {// Session will automatically expire in 5 minutes
    expires: 600000},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize // connects the express session to db 
  })
};

app.use(session(sess)); // session 
app.use(express.json());
//  It takes incoming POST data and converts it to key/value pairings that can be accessed in the req.body object. The extended: true option set inside the method 
// call informs our server that there may be sub-array data nested in it as well
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // middleware take contents from public folder 
// handlebar - template engine 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening at'+`${PORT}`));
});
