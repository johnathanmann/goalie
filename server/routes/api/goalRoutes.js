const router = require("express").Router();
const {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal
} = require("../../controllers/goalController");

// /api/goals
router.route("/").get(getAllGoals).post(createGoal);
// /api/goals/:goalId
router.route("/:goalId").get(getGoalById).put(updateGoal).delete(deleteGoal);

module.exports = router;
