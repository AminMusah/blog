const User = require("../model/User");
const { registerValidation, loginValidation } = require("../validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
const register = async (req, res) => {
  try {
    //validate data
    const { error } = registerValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    //checking if user already exists in the database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      return res.status(400).send({ message: "User Already exist" });
    }

    //hash password
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create a user
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const saveUser = await user.save();
    res.send(saveUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

//login
const login = async (req, res) => {
  try {
   //validate data
   const { error } = loginValidation(req.body);
   if (error) {
     return res.status(400).send({ message: error.details[0].message });
   }

    //checking if user already exists in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }

    //compare valid password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).send({ message: "Invalid Email or Password" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token);

    res.send({ user, token });

  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { register, login };
