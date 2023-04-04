const router = require("express").Router();
const {
  getAllModels,
  getModelById,
  createModel,
  updateModel,
  deleteModel
} = require("../../controllers/modelController");

// /api/models
router.route("/").get(getAllModels).post(createModel);
// /api/models/:modelId
router.route("/:modelId").get(getModelById).put(updateModel).delete(deleteModel);

module.exports = router;
