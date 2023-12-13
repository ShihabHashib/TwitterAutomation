# Twitter Automation

This is a Twitter bot created in Node.js that automates various tasks on Twitter. **Enterprise Dev Access Required**

## Features

- **Post Content**: The bot posts text-only tweets at regular intervals.
- **Send Follow Requests**: It sends follow requests to specific users periodically from the given list.
- **Send Direct Messages**: This bot sends user-defined direct messages to new followers.
- **UnFollow Non Follower**: Unfollow the users who don't follow back.

## Requirements

- Node.js
- [dotenv](https://www.npmjs.com/package/dotenv)
- [twit](https://www.npmjs.com/package/twit)

## Usage

1. Clone the repository.
2. Create a `.env` file with your Twitter API credential.
3. Install dependencies with `npm install`.
4. Run the bot with `node main.js`.

## Configuration

To configure the bot, update the `.env` file with your Twitter API credentials and customize the settings in the JavaScript files.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the [twit](https://www.npmjs.com/package/twit) library for simplifying Twitter API interactions.
