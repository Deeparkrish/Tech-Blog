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
 When an end-user visits a  CMS-style blog site, 
  * He presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the option to log in
  * Upon choosingthe homepage option,the user is taken to the homepage.
  * The user chan click om any other links in the navigation like login or Sign up
  * If the user chooses to sign up, he is prompted to create a username and password
  * When he clicks on the sign-up button, the user credentials are saved and I am logged into the site
  * When he revisits the site at a later time and choose to sign in,he will be prompted to enter my username and password
  * Once signed in,he sees navigation links for the homepage, the dashboard, and the option to log out
  * When he clicks  on the homepage option in the navigation he is taken to the homepage and presented with existing blog posts that include,
  the post title and the date created.
  * Upon clicking on an existing blog post,he is provided with the post title, contents, post creator’s username, and 
    date created for that post and has an option to leave a comment on the post.
  * As he enters a comment and hits the submit button, the comment is saved and post is updated to display the comment.
  * When the user clicks on the dashboard he is presented with any blog posts he had already created and an option to add a new blog post.
  * Upon clicking  =the button to add a new blog post, he will prompted to enter both a title and contents for my blog post, hit the create button
    and the contents entered are saved as a new blog post.
  * The user can delete or update his post and the dashboard updated accordingly.
  * the user is logged out of the site either by clicking logout button or if the session is inactive for a long time.
    
  ## Technologies
   The MySQL2  and Sequelize packages to connect your Express.js API to a MySQL database and the dotenv package to use              
   environment variables to store sensitive data, like MySQL username, password, and database name.


  ## ModelAssociations
  ![Webpage](https://github.com/Deeparkrish/e-commerce-backend/blob/master/src/IMG_6043.jpeg)

  
  
  
  ##  Mockup
   ![Webpage](https://github.com/Deeparkrish/e-commerce-backend/blob/master/src/Models.png)


  ## Testing
  ####  CRUD operations can be testted using following applications:
    Insomnia core / Postman  or your browser 
    link : http://localhost:3000/api/<routes>
  

  ## ProjectRepo 
  Git hub link: https://github.com/Deeparkrish/e-commerce-backend

  ## Contribution
  Created with ❤️ by [Deepa Krishnan](https://github.com/DeeparKrish/README-generator)


