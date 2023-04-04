const User = require("../models/User");
const Project = require("../models/Project");
const { signToken } = require("../utils/auth");

async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find()
      .select("-__v")
      .select("-password")
      .populate("posts");
    res.status(200).json(allUsers);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function getUserById(req, res) {
  try {
    const singleUser = await User.findById(req.params.userId)
      .select("-__v")
      .select("-password")
      .populate("projects");
    res.status(200).json(singleUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function getUserProjects(req, res) {
  try {
    var allProjects = await User.findById(req.params.userId).populate("projects");
    allProjects = allProjects.projects;
    res.status(200).json({allProjects});
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    const token = signToken(user);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function updateUser(req, res) {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { new: true }
    )
      .select("-__v")
      .select("-password");
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await User.findOneAndRemove({ _id: req.params.userId })
      .select("-__v")
      .select("-password");
    await Project.deleteMany({ _id: { $in: deletedUser.posts } });
    res.status(200).json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function loginUser(req, res) {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).select("-__v");

    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await user.isCorrectPassword(req.body.password);
    console.log(validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const token = signToken(user);
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserProjects
};
