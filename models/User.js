// import Model and Data types from Sequelize
// use the special Sequelize DataTypes object provide what type of data it is
const { Model, DataTypes } = require('sequelize');
// connection to db 
const sequelize = require('../config/connection');

// User Model ineriting Model class 
 class User extends Model{}

 //initialize the model's data and configuration
 User.init(
    // Define Columns and the datatypes 
    {
         // define an id column
          id: {
            // an integer 
            type: DataTypes.INTEGER,
            // cant be null 
            allowNull: false,
            // Primary Key of the table 
            primaryKey: true,
            // turn on auto increment
            autoIncrement: true
          },
          // define a username column
          username: {
            type: DataTypes.STRING,
            allowNull: false // cant be null
          },
          // define an email column
          email: {
            type: DataTypes.STRING,
            // cannot be NULL
            allowNull: false,
            // no duplicate email values 
            unique: true,
            // check if its in valid email  format 
            validate: {
              isEmail: true
            }
          },
          // define a password column
          password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              // the password must be at least 8 characters long
              len: [8]
            }
          }
    },

    {// Table configuration options
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
     
 )
 module.exports =User;