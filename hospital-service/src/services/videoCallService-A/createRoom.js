require("dotenv").config();

const { ACCOUNT_SID, AUTH_TOKEN} = process.env;

const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

const createRoom = async (req, res) => {
  const roomName = req.body.roomName;

  const room = await client.video.v1.rooms.create({
    recordParticipantsOnConnect: false,
    statusCallBack: "http://example.org",
    type: "group",
    uniqueName: roomName,
  });
  //crea el atributo room dentro de la sessión y le asigna el valor del room creado.
  req.session.room = room;

  res.send({ room: room });
};

module.exports = { createRoom };
