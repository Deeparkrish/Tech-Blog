// import Model and Data types from Sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Comment model inhereting Model class 
class Comment extends Model {}
// Initialize the model's data 
Comment.init(
    // Define columns 
  {
    // comment id - integer, not null /primary key
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // commwnt text , string , not null
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    // reference to the user who made the comment 
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    // reference to the post the comment was made 
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'post',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;
