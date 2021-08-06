// import Model and Data types from Sequelize
// use the special Sequelize DataTypes object provide what type of data it is
const { Model, DataTypes } = require('sequelize');
// connection to db 
const sequelize = require('../config/connection');
// import bcrypt ofr pwd authentication 
const bcrypt = require('bcrypt');

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
    // set up beforeCreate lifecycle "hook" functionality
    {
      hooks: {
      //execute the bcrypt hash function on the plaintext password, 
      // set up befre creating a user record in the table         
      async beforeCreate(newUserData) {
          // 10 -is the saltround called costfactors - syas number of times hashing algo is executed
          newUserData.password = await bcrypt.hash(newUserData.password, 10);
          return newUserData; //  return the hashed password 
        },
      // set up beforeUpdate lifecycle "hook" functionality
    async beforeUpdate(updatedUserData) {
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
    return updatedUserData;
  }
      },
          // table defintions 
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'user'
    }
 )
 module.exports =User;