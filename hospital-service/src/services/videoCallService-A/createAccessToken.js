const AccessToken = require("twilio").jwt.AccessToken;
const { faker } = require("@faker-js/faker");
const { Pacient, Doctor } = require("../../db");
require("dotenv").config();

const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;

const createAccessToken = async (req, res) => {
  const VideoGrant = AccessToken.VideoGrant;

  let identity;

  if (req.session.isLogged) {
    const userId = req.session.passport.user.userId;

    let user;

    if (req.session.passport.user.userType === "Doctor") {
      user = await Doctor.findByPk(userId);
      identity = `Doctor: ${user.name} ${user.lastname}`;
    } else if (req.session.passport.user.userType === "Pacient") {
      user = await Pacient.findByPk(userId);
      identity = `Paciente: ${user.name} ${user.lastname}`;
    }

    // identity = user.name + user.lastname;
  } else {
    identity = "Invitado";
  }

  const videoGrant = new VideoGrant({
    room: req.session.room.uniqueName,
  });

  const token = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET, {
    identity: identity,
  });
  token.addGrant(videoGrant);

  req.session.token = token;

  res.send(token.toJwt());
};

module.exports = { createAccessToken };
