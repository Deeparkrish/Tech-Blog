// import Model and Data types from Sequelize
const { Model, DataTypes } = require('sequelize');
// connection to db 
const sequelize = require('../config/connection');

// User Model ineriting Model class 
 class User extends Model{}

 //initialize the model's data and configuration
 User.init(
     // Define Columns and the datatypes 
    {

    },
    {
        // Table configuration options

    }
     
 )