const router = require("express").Router();
const {
  getAllStatss,
  getStatsById,
  createStats,
  updateStats,
  deleteStats,
  addValue,
  subtractValue
} = require("../../controllers/statsController");

// /api/stats
router.route("/").get(getAllStatss).post(createStats);
// /api/stats/:statsId
router.route("/:statsId").get(getStatsById).put(updateStats).delete(deleteStats);
// /api/stats/addvalue/:statsId
router.route("/addvalue/:statsId").put(addValue)
// /api/stats/subtractvalue/:statsId
router.route("/subtractvalue/:statsId").put(subtractValue)

module.exports = router;
