# tech-blog

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
    <img src="https://img.shields.io/badge/-bulma-orange"/>

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
 GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments

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


