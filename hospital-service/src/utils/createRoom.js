require("dotenv").config();

const { ACCOUNT_SID, AUTH_TOKEN, API_KEY, API_SECRET } = process.env;

const client = require("twilio")(ACCOUNT_SID, AUTH_TOKEN);

const createRoom = async (req, res) => {
  const roomName = req.body.roomName;

  const room = await client.video.v1.rooms.create({
    recordParticipantsOnConnect: false,
    statusCallBack: "http://example.org",
    type: "group",
    uniqueName: roomName,
  });

  req.session.room = room;

  res.send({ room: room });
};

module.exports = { createRoom };
