const User = require("../model/User");
const Post = require("../model/Post");
const bcrypt = require("bcryptjs");

//get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ users });
  } catch (error) {
    res.status(500).send(error);
  }
};

//get user
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc
    res.status(200).json(others);
  } catch (error) {
    res.status(500).send(error);
  }
};

//update user
const updateUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      if (req.body.password) {
        //hash password
        let salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
        const updateUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updateUser);
      } catch (error) {
        res.status(401).send(error);
      }
    } else {
      res.status(401).send("You can only update your account!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete user
const deleteUser = async (req, res) => {
  try {
    if (req.body.userId === req.params.id) {
      try {
        const user = await User.findById(req.params.id)
        try {
          await Post.deleteMany({name: user.name});
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json("user has been deleted!");
        } catch (error) {
          res.status(401).send(error);
        }
      } catch (error) {
        res.status(400).json('User not found!')
      }
    } else {
      res.status(401).send("You can only delete your account!");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getUsers, updateUser, deleteUser, getUser};
