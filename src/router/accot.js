const {
  getacot,
  createaccount,
  updateacot,
  deleteacot,
  seachacot,
} = require("../controller/account.controller");

const router = require("express").Router();
router.post("/account", createaccount);

router.get("/account", getacot);
router.put("/account/:id", updateacot);
router.delete("/account/:id", deleteacot);
router.get("/account/:id", seachacot);

module.exports = router;
