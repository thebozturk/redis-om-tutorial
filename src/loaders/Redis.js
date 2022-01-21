let { Client } = require("redis-om");
require("dotenv").config();

//Connect to redis cloud
const client = new Client();
(async () => {
  try {
    await client.open(process.env.REDIS_URL);
    console.log("Connection has been successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = client;
