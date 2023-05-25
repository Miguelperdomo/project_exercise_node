const { transf } = require("../model/model.transf");
//controller account
const { account } = require("../model/model.account");

exports.getTransfer = async (req, res) => {
  try {
    const getTransfData = await transf.findAll();
    res.json(getTransfData);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.createTransf = async (req, res) => {
  try {
    const { creation_date, sender, recipient, amount } = req.body;
    const send = await account.findOne({ where: { idUser: sender } });
    console.log(send.balance);
    if (amount > send.balance) {
      return res.status(500).json({
        message: "Error you don't have enough to send to the person, try again",
      });
    }
    const createdTransf = await transf.create({
      creation_date,
      sender,
      recipient,
      amount,
    });

    res.json({ balances: send.balance, createdTransf });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateTransf = async (req, res) => {
  try {
    const { id } = req.params;
    const userUpdate = await transf.findOne({ where: { id_transfer: id } });
    userUpdate.set(req.body);
    await userUpdate.save();
    res.json(userUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteTransf = async (req, res) => {
  try {
    const { id } = req.params;
    await transf.destroy({ where: { id_transfer: id } });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.searchTransf = async (req, res) => {
  try {
    const { id } = req.params;
    const search = await transf.findOne({ where: { id_transfer: id } });
    res.json(search);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
