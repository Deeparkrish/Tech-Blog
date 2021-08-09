const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "Awesome job!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Way to go!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Appreciate all the hardwork"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Congratulations on your acheivement!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great to know!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Most awaiting feature"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Keep up the good work!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "I find this very useful"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;