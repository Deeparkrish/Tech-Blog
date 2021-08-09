const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// Home Page - Get all Post associated with user along with comments 
router.get('/', (req, res) => {
// Get all Posts 
Post.findAll({
  attributes: [
    'id',
    'title',
    'createdAt',
    'content'
  ],
  // Include comments for the post 
  include: [
    {
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
      include: {
        model: User,
        attributes: ['username']
      }
    },
    // User who made Post  
    {
      model: User,
      attributes: ['username']
    }
  ]
})
  .then(dbPostData => {
    // Upon success,Get the posts  and render it on homepage 
    const posts = dbPostData.map(post => post.get({ plain: true }));
    res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

//Render a single Post Page
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'createdAt',
      'content'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
  
      // serialize the data
      const post = dbPostData.get({ plain: true });
  
      // pass data to template
      res.render('single-post', {
          post,
          loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

// Login  Page 
router.get('/login', (req, res) => {
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}

res.render('login');
});

// Render Sign up page 
router.get('/signup', (req, res) => {
if (req.session.loggedIn) {
  res.redirect('/');
  return;
}

res.render('signup');
});



  module.exports= router;