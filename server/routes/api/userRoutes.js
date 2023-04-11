const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
  getUserGoals,
  addCompletedValue,
  addGoalValue
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createUser);
router.route("/login").post(loginUser);
// /api/users/:userId
router.route("/:userId").get(getUserById).put(updateUser).delete(deleteUser);
// /api/users/goals/:userId
router.route("/goals/:userId").get(getUserGoals);
// /api/users/goals/completed/:userId
router.route("/goals/completed/:userId").put(addCompletedValue);
// /api/users/goals/goalsMade/:userId
router.route("/goals/goalsMade/:userId").put(addGoalValue);

module.exports = router;
