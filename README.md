# tech-blog

# e-commerce-backend

  <p align="left">
    <img src="https://img.shields.io/github/repo-size/deeparkrish/tech-blog" />
    <img src="https://img.shields.io/github/issues/deeparkrish/tech-blog" />
    <img src="https://img.shields.io/github/last-commit/deeparkrish/tech-blog" >       
  </p>
  <p align="left"> 
     <img src="https://img.shields.io/github/languages/top/deeparkrish/tech-blog"/>
    <img src="https://img.shields.io/badge/MYSQL2-yellow" />
    <img src="https://img.shields.io/badge/Sequelize-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-express-red" >
    <img src="https://img.shields.io/badge/-dtoenv-lightgrey" />
</p>

 ## Description
  A app that uses the latest technologies(MySQL2, Express, Sequelize) to build the back end for an e-commerce site.
  
 
  ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Process](#process)
  * [Technologies](#technologies)
  * [ModelAssociations](#modelassociations)
  * [MockUp](#mockup)
  * [ProjectDemo](#projectdemo)
  * [Testing](#testing)
  * [ProjectRepo](#projectrepo)
  * [Contribution](#contribution)
  
  
  ##  Installation
    npm init
    npm install  express mysql2  sequelize dotenv

  ##  Usage
  ### To access SQL :   
    mysql -u root -p
    Enter passwrd when prompted
    source db/schema.sql
  ### To Seed database:
    npm run seed
  ### Start the app
    node server.js

  ## License 
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)<br />
  This app is covered under ISC license.
  
   ## Process
  The user is provided with a functional Express.js API
  * At start a .env file is created where ,the user adds the database name, MySQL username, and MySQL password to an environment    variable file(dtoenv)
  * He is able to connect to a database using Sequelize
  * Then he enters schema(mysql) and seed commands(npm run seed) upon which,
    a development database is created(ecommerce_db) and is seeded with test data
  * When the app is invoked, the server is started and the Sequelize models are synced to the database.
  * When the user opens API GET routes in Insomnia/Postman for categories, products, or tags, 
    the data for each of these routes is displayed in a formatted JSON object.
  * The user can test API POST, PUT, and DELETE routes in Insomnia and he shall be able to successfully create,read,update, 
    and delete data in the database.
    
  ## Technologies
   The MySQL2  and Sequelize packages to connect your Express.js API to a MySQL database and the dotenv package to use              environment variables to store sensitive data, like MySQL username, password, and database name.


  ## ModelAssociations
  ![Webpage](https://github.com/Deeparkrish/e-commerce-backend/blob/master/src/IMG_6043.jpeg)

  
  
  
  ##  Mockup
   ![Webpage](https://github.com/Deeparkrish/e-commerce-backend/blob/master/src/Models.png)
   ![Webpage](https://github.com/Deeparkrish/e-commerce-backend/blob/master/src/model%20-association.png)


  ## Testing
  ####  CRUD operations can be testted using following applications:
    Insomnia core / Postman  or your browser 
    link : http://localhost:3000/api/<routes>
  

  ## ProjectRepo 
  Git hub link: https://github.com/Deeparkrish/e-commerce-backend

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)


