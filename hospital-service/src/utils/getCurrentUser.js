const { Pacient, Doctor } = require("../db");

const getCurrentUser = async (req, res) => {
  if (req.session.isLogged) {
    const userId = req.session.passport.user.userId;

    let user;

    if (req.session.passport.user.userType === "Doctor") {
      user = await Doctor.findByPk(userId);
    } else if (req.session.passport.user.userType === "Pacient") {
      user = await Pacient.findByPk(userId);
    }
    res.status(200).send(user.name);
  }
};

module.exports = { getCurrentUser };
