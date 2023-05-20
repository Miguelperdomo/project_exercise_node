const {
  getTransfer,
  createTransf,
} = require("../controller/controller.transf");

const router = require("express").Router();
router.post("/transf", createTransf);

router.get("/transf", getTransfer);
// router.put("/transf/:id", updateacot);
// router.delete("/transf/:id", deleteacot);
// router.get("/transf/:id", seachacot);

module.exports = router;
