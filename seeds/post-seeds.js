const sequelize = require('../config/connection');
const { Post,User } = require('../models');

const postData = [
    {
        title: "COVID-Tracker goes public!",
        content: "An app that provides the current covid data, of any US State that an end user selects.",
        user_id: 3
    },
    {
        title: "Weather Dashboard being used by 1 million subscribers!",
        content: "An app with a weather outlook for user chosen city.",
        user_id: 1
    },
    {
        title: "Schedule your day with our Work Day Scheduler !",
        content: "A calendar app that allows a user to plan events for each hour of your work day day.",
        user_id: 2

    },
    {
        title: "Tech Blog is the technically speaking blog of today!",
        content:" An app with MVC paradigm,that allows user to blog and post comments.",
        user_id: 5
    },
    {
        title: "Passwordgenerator now improved! ",
        content: "An app that helps a user to generate a secured password.",
        user_id: 4
    }

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;