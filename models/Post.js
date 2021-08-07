// import Model and Data types from Sequelize
const { Model, DataTypes, Sequelize } = require('sequelize');
// connection to db 
const sequelize = require('../config/connection');

// Post model inhereting Model class 
class Post extends Model{}
// Initialize the model's data 
Post.init(
    {// Define columns 
        id: {
            // integer
            type: DataTypes.INTEGER,
            // not Null
            allowNull: false,
            //primary key 
            primaryKey: true,
            // autincrement upon adding new record 
            autoIncrement: true
          },
          // post title 
          title: {
            // string 
            type: DataTypes.STRING,
            // cannot be null
            allowNull: false
          },
          // Post content 
          content :{
            type: DataTypes.STRING,
            allowNull: false
          },
          // refer to User the made the blog post 
          user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
          }
    },
    {// Table configuration options
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)
// Make the model accessible to other part of applicaitons 
module.exports = Post;