const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;
require("dotenv").config();

const tokenGenerator = (identity, room) => {
  let grant = new VideoGrant({ room: room });

  let token = new AccessToken(ACCOUNT_SID, API_KEY, API_SECRET, {
    identity: identity,
  });

  token.addGrant(grant);

  return token.toJwt();
};

module.exports = { tokenGenerator };
