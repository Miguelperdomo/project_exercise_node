const { user } = require("../model/model.users");

exports.getUser = async (req, res) => {
  try {
    const getUserData = await user.findAll();
    res.json(getUserData);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { first_name, last_name, age, email, phone_number, address } =
      req.body;

    const createdUser = await user.create({
      first_name,
      last_name,
      age,
      email,
      phone_number,
      address,
    });

    res.json(createdUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdate = await user.findOne({ where: { id_user: id } });
    userUpdate.set(req.body);
    await userUpdate.save();
    res.json(userUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await user.destroy({ where: { id_user: id } });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.searchUser = async (req, res) => {
  try {
    const { id } = req.params;
    const search = await user.findOne({ where: { id_user: id } });
    res.json(search);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
