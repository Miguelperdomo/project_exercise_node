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

// // Create a new transfer
// const transfer = await transfer.create({
//   sender: senderName,
//   receiver: receiverName,
//   amount: transferAmount,
//   senderAccountId: senderAccountId,
//   receiverAccountId: receiverAccountId,
// });