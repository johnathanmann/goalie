const Stats = require("../models/Stats");
const User = require("../models/User");

async function getAllStatss(req, res) {
  Stats.find({})
  .then(allStatss => res.json(allStatss))
  .catch(err => {
    console.log(err);
    res.status(400).json(err)
})
}

async function getStatsById(req, res) {
  const singleStats = await Stats.findById(req.params.statsId).select("-__v");
  res.status(200).json(singleStats)
  .catch(err => {
    console.log(err);
    res.status(400).json(err)
})
}


async function createStats(req, res) {
  try {
    const newStats = await Stats.create(req.body);
    const associatedUser = await User.findOneAndUpdate(
      { _id: req.body.user },
      { $addToSet: { statss: newStats._id } },
      { new: true }
    )
      .select("-__v")
      .populate("statss");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function updateStats(req, res) {
  try {
    const updateStats = await Stats.findOneAndUpdate(
      { _id: req.params.statsId },
      { $set: req.body },
      { new: true }
    ).select("-__v");
    res.status(200).json(updateStats);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function deleteStats(req, res) {
  try {
    await Stats.findOneAndDelete({ _id: req.params.statsId });
    const associatedUser = await User.findOneAndUpdate(
      { statss: req.params.statsId },
      { $pull: { statss: req.params.statsId } },
      { new: true }
    )
      .select("-__v")
      .populate("statss");
    res.status(200).json(associatedUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function addValue(req, res) {
  try {
    const updatedStats = await Stats.updateOne({ _id: req.params.statsId }, { $inc: { value: 1 }});
    
    res.status(200).json(updatedStats);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}

async function subtractValue(req, res) {
  try {
    const updatedStats = await Stats.updateOne({ _id: req.params.statsId }, { $inc: { value: -1 }});
    
    res.status(200).json(updatedStats);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}


module.exports = {
  getAllStatss,
  getStatsById,
  createStats,
  updateStats,
  deleteStats,
  addValue,
  subtractValue
};
