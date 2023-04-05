const router = require("express").Router();
const {
  getAllGoals,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
  addValue,
  subtractValue
} = require("../../controllers/goalController");

// /api/goals
router.route("/").get(getAllGoals).post(createGoal);
// /api/goals/:goalId
router.route("/:goalId").get(getGoalById).put(updateGoal).delete(deleteGoal);
// /api/goals/addvalue/:goalId
router.route("/addvalue/:goalId").put(addValue)
// /api/goals/subtractvalue/:goalId
router.route("/subtractvalue/:goalId").put(subtractValue)

module.exports = router;
