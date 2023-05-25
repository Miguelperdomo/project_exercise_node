const {
  getTransfer,
  createTransf,
  deleteTransf,
  searchTransf,
  updateTransf,
} = require("../controller/controller.transf");

const router = require("express").Router();
router.post("/transf", createTransf);

router.get("/transf", getTransfer);
router.put("/transf/:id", updateTransf);
router.delete("/transf/:id", deleteTransf);
router.get("/transf/:id", searchTransf);

module.exports = router;
