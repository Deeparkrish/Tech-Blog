// import Model and Data types from Sequelize
const { Model, DataTypes } = require('sequelize');
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
          // Url link of the post 
          post_url: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isURL: true
            }
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
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
)

module.exports = Post;