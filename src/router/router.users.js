const {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  searchUser,
} = require("../controller/controller.user");

const router = require("express").Router();
router.post("/user", createUser);

router.get("/user", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", searchUser);

module.exports = router;
