const User = require("../model/User");
const Post = require("../model/Post");
const bcrypt = require("bcryptjs");

//get all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).send(error);
  }
};

//update user
const createPost = async (req, res) => {
    try {
      const newPost = new Post({
        name: req.body.name,
        post: req.body.post,
      });
      const savedPost = await newPost.save()
      res.status(200).send(savedPost);
    } catch (error) {
      res.status(500).send(error);
    }
  };

//get user
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

//update user
const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.id === req.body.id) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatePost);
      } catch (error) {
        res.status(401).send(error);
      }
    } else {
      res.status(401).send("You can only update your post!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete user
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    if (post.id === req.body.id) {
      try {
        await post.delete()
        res.status(200).send('post has been deleted')
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(401).send("You can only delete your post!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createPost, getPosts, updatePost, deletePost, getPost};
