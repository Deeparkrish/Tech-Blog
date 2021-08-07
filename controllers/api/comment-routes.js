const router = require('express').Router();
const sequelize = require('../../config/connection');

const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
        order: [['createdAt', 'DESC']],
    attributes: [
      'id',
      'comment_text',
      'createdAt',
      'updatedAt'
    ],
    include: [
      // include the Comment model here:
      {
        model: Post,
        attributes: ['id', 'title', 'content', 'user_id','createdAt'],
        include: {
          model: User,
          attributes: ['username']
        }
      }
    ]
      }
    )
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });

});

router.get('/:id', (req, res) => {
    Comment.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'comment_text','createdAt'],
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Post,
          attributes: ['id','title','content']
        }
      ]

    })
    .then(dbCommentData => {
      if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
    .catch(err => {
      console.log(err);
        res.status(500).json(err);
      });
      
});

router.delete('/:id', (req, res) => {
  if (req.session) {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(dbCommentData => {
      if (!dbCommentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
        res.json(dbCommentData);
      })
    .catch(err => {
      console.log(err);
        res.status(500).json(err);
      });
  }    
});

module.exports = router;