const Twit = require("twit");
require("dotenv").config(); // Load .env file

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// This function is to unfollow users one by one after 30 seconds
function unfollowNonFollowers() {
  T.get("friends/ids", (err, data, response) => {
    if (err) {
      console.log("Error fetching friends:", err);
      return;
    }

    const friends = data.ids;

    T.get("followers/ids", (err, data, response) => {
      if (err) {
        console.log("Error fetching followers:", err);
        return;
      }

      const followers = data.ids;

      const nonFollowers = friends.filter((user) => !followers.includes(user));

      if (nonFollowers.length === 0) {
        console.log("No non-followers to unfollow.");
        return;
      }

      function unfollowNextUser() {
        const user = nonFollowers.pop();
        if (user) {
          T.post(
            "friendships/destroy",
            { user_id: user },
            (err, data, response) => {
              if (err) {
                console.log("Error unfollowing user:", err);
              } else {
                console.log("Unfollowed user:", user);
              }
              setTimeout(unfollowNextUser, 30 * 1000); // Wait for 30 seconds before unfollowing the next user
            }
          );
        } else {
          console.log("Unfollowed all non-followers.");
        }
      }

      unfollowNextUser();
    });
  });
}

unfollowNonFollowers();
