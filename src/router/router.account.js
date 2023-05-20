const {
  getAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  searchAccount,
} = require("../controller/controller.accounts");

const router = require("express").Router();
router.post("/account", createAccount);

router.get("/account", getAccount);
router.put("/account/:id", updateAccount);
router.delete("/account/:id", deleteAccount);
router.get("/account/:id", searchAccount);

module.exports = router;
