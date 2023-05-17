const {
  getuser,
  createuser,
  updateuse,
  deleteuse,
  seachuse,
} = require("../controller/user.controller");

const router = require("express").Router();
router.post("/user", createuser);

router.get("/user", getuser);
router.put("/user/:id", updateuse);
router.delete("/user/:id", deleteuse);
router.get("/user/:id", seachuse);

module.exports = router;
