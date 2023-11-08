const Twit = require("twit");
require("dotenv").config(); // Load .env file

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

function sendFollowRequests() {
  const usersToFollow = ["twitteruser1", "twitteruser2"];

  usersToFollow.forEach((user) => {
    T.post(
      "friendships/create",
      { screen_name: user },
      (err, data, response) => {
        if (err) {
          console.log("Error following:", user, err);
        } else {
          console.log("Followed:", user);
        }
      }
    );
  });
}

setInterval(sendFollowRequests, 3 * 60 * 1000); // 3 minutes
