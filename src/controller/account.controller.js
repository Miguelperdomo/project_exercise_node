const { accot } = require("../model/account");

exports.getacot = async (req, res) => {
  try {
    const us = await accot.findAll();
    res.json(us);
  } catch (error) {
    return res.status(500).json({ mensaje: error });
  }
};

exports.createaccount = async (req, res) => {
  try {
    const { id_account, balance, idUser } = req.body;
    //let category = "";

    let category;
    if (balance < 1000000) {
      category = "cobre";
    } else if (balance < 552000000) {
      category = "plata";
    } else {
      category = "oro";
    }

    // if (this.balance <= 1000000) {
    //   this.category = "cobre";
    // }
    // if (this.balance <= 550000000) {
    //   this.category = "plata";
    // } else {
    //   category = "oro";
    // }

    const createacount = await accot.create({
      id_account,
      balance,
      idUser,
      category,
    });
    console.log(createacount);
    res.json(createacount);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateacot = async (req, res) => {
  try {
    const { id } = req.params;
    const usupdate = await accot.findOne({ where: { id_account: id } });
    usupdate.set(req.body);
    await usupdate.save();
    res.json(usupdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteacot = async (req, res) => {
  try {
    const { id } = req.params;
    await accot.destroy({ where: { id_account: id } });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.seachacot = async (req, res) => {
  try {
    const { id } = req.params;
    const buscar = await accot.findOne({ where: { id_account: id } });
    res.json(buscar);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
