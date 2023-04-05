const Goal = require("../models/Goal");
const User = require("../models/User");

async function getAllGoals(req, res) {
  Goal.find({})
  .then(allGoals => res.json(allGoals))
  .catch(err => {
    console.log(err);
    res.status(400).json(err)
})
}

async function getGoalById(req, res) {
  const singleGoal = await Goal.findById(req.params.goalId).select("-__v");
  res.status(200).json(singleGoal)
  .catch(err => {
    console.log(err);
    res.status(400).json(err)
})
}


async function createGoal(req, res) {
  try {
    const newGoal = await Goal.create(req.body);
    const associatedUser = await User.findOneAndUpdate(
      { _id: req.body.user },
      { $addToSet: { goals: newGoal._id } },
      { new: true }
    )
      .select("-__v")
      .populate("goals");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function updateGoal(req, res) {
  try {
    const updateGoal = await Goal.findOneAndUpdate(
      { _id: req.params.goalId },
      { $set: req.body },
      { new: true }
    ).select("-__v");
    res.status(200).json(updateGoal);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function deleteGoal(req, res) {
  try {
    await Goal.findOneAndDelete({ _id: req.params.goalId });
    const associatedUser = await User.findOneAndUpdate(
      { goals: req.params.goalId },
      { $pull: { goals: req.params.goalId } },
      { new: true }
    )
      .select("-__v")
      .populate("goals");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function addValue(req, res) {
  try {
    const updatedGoal = await Goal.updateOne({ _id: req.params.goalId }, { $inc: { value: 1 }});
    
    res.status(200).json(updatedGoal);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}


module.exports = {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
  addValue
};
