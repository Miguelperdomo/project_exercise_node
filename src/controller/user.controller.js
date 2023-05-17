const { user } = require("../model/user");

exports.getuser = async (req, res) => {
  try {
    const us = await user.findAll();
    res.json(us);
  } catch (error) {
    return res.status(500).json({ mensaje: error });
  }
};

exports.createuser = async (req, res) => {
  try {
    const { first_name, last_name, age, email, phone_number, address } =
      req.body;

    const createuserr = await user.create({
      first_name,
      last_name,
      age,
      email,
      phone_number,
      address,
    });

    res.json(createuserr);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateuse = async (req, res) => {
  try {
    const { id } = req.params;
    const usupdate = await user.findOne({ where: { id_user: id } });
    usupdate.set(req.body);
    await usupdate.save();
    res.json(usupdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteuse = async (req, res) => {
  try {
    const { id } = req.params;
    await user.destroy({ where: { id_user: id } });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.seachuse = async (req, res) => {
  try {
    const { id } = req.params;
    const buscar = await user.findOne({ where: { id_user: id } });
    res.json(buscar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
