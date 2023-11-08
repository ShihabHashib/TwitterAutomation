const Twit = require("twit");
require("dotenv").config(); // Load .env file

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

const PostContentData = require("./postContent.json");

function PostContent() {
  const content = PostContentData.content;
  const randomPost = content[Math.floor(Math.random() * content.length)];

  T.post("statuses/update", randomPost, (err, data, response) => {
    if (err) {
      console.log("Error posting:", err);
    } else {
      console.log("Posted:", data.text);
    }
  });
}

setInterval(PostContent, 1 * 60 * 1000); // 30 minutes
