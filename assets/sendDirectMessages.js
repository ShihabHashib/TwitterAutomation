const Twit = require("twit");
require("dotenv").config(); // Load .env file

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

function SendDirectMessages() {
  T.get("followers/ids", (err, data, response) => {
    if (err) {
      console.log("Error fetching followers:", err);
      return;
    }

    const followerIds = data.ids;
    followerIds.forEach((followerId) => {
      T.post(
        "direct_messages/new",
        {
          user_id: followerId,
          text: "Thank you for following! ",
        },
        (err, data, response) => {
          if (err) {
            console.log("Error sending DM:", err);
          } else {
            console.log("Sent DM to user:", followerId);
          }
        }
      );
    });
  });
}

setInterval(SendDirectMessages, 15 * 60 * 1000); // 15 minutes
