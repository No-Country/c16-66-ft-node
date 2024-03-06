const AccessToken = require("twilio").jwt.AccessToken;
const VideoGrant = AccessToken.VideoGrant;
const { ACCOUNT_SID, API_KEY, API_SECRET } = process.env;
require("dotenv").config();

const tokenGenerator = (identity, room) => {
  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  let grant = new VideoGrant({ room: room });

  let token = new AccessToken(
    ACCOUNT_SID,
    API_KEY,
    API_SECRET,
    {
      identity: identity,
    },
    { grant: grant }
  );

  // Assign identity to the token

  // Grant the access token Twilio Video capabilities

  // token.addGrant(grant);

  // Serialize the token to a JWT string
  return token.toJwt();
};

module.exports = { tokenGenerator };
