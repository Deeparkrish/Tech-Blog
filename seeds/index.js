const sequelize = require('../config/connection');

const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('----*****Database synced*******------');
  await seedUsers();
  console.log('----******User seeded*****----------');

  await seedPosts();
  console.log('-----****Post Table Seeded******-------');

  await seedComments();
  console.log('------****Comment Table Seeded*****--------');
  process.exit(0);
};

seedAll();

