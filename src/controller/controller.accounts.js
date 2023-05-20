const { account } = require("../model/model.account");
const CC = require("currency-converter-lt");

exports.getAccount = async (req, res) => {
  try {
    const getAccountData = await account.findAll();
    res.json(getAccountData);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

exports.createAccount = async (req, res) => {
  try {
    const { id_account, balance, idUser } = req.body;

    let category;
    if (balance < 1000000) {
      category = "cobre";
    } else if (balance < 552000000) {
      category = "plata";
    } else {
      category = "oro";
    }
    ///converting a divisas
    function convertingDivisas(amountInCOP) {
      const exchangeRate = 4523.12;

      const amountInUSD = amountInCOP / exchangeRate;

      return parseFloat(amountInUSD.toFixed(2));
    }
    let balanceUsd = convertingDivisas(balance);

    const createdAccount = await account.create({
      id_account,
      balance,
      balanceUsd,
      idUser,
      category,
    });
    console.log(createdAccount);
    res.json(createdAccount);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.updateAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const accountUpdate = await account.findOne({ where: { id_account: id } });
    accountUpdate.set(req.body);
    await accountUpdate.save();
    res.json(accountUpdate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;
    await account.destroy({ where: { id_account: id } });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.searchAccount = async (req, res) => {
  try {
    const { id } = req.params;
    const search = await account.findOne({ where: { id_account: id } });
    res.json(search);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
