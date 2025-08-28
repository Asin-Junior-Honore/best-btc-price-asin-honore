const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  blockchain: {
    apiUrl: process.env.BLOCKCHAIN_API_URL || "https://blockchain.info/ticker",
  },
  exmo: {
    apiUrl: process.env.EXMO_API_URL || "https://api.exmo.com/v1/ticker",
  },
  server: {
    port: process.env.PORT || 3000,
  },
};
